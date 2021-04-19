import {after} from './TimeoutUtils';

enum TypewriterState {
	IDLE = 'idle',
	PAUSED = 'paused',
	STOPPED = 'stopped',
	WORKING = 'working',
}

interface TypewriterEventMap {
	start: undefined;
	stop: undefined;
	pause: undefined;
	pauseFor: number;
	typeText: string;
	pasteText: string;
	typeHTML: string;
	pasteHTML: string;
	execute: () => void | Promise<void>;
}

type EventKey = keyof TypewriterEventMap;
type EventValue<K extends EventKey> = TypewriterEventMap[K];
type QuededEvent<K extends EventKey = EventKey> = [key: K, value: EventValue<K>];

export interface TypewriterOptions {
	/** How many miliseconds between each character */
	typeDelay?: number;
	/** When true, speed will be randomized on every character, ranging from 0 to speed.  */
	human?: boolean;
	/** Start the event loop after initalization */
	autoStart?: boolean;
	/** Log the activity of the Typewriter for debugging */
	logSteps?: boolean;
	/** If the content should be written to innerHTML at the end typing anything. */
	renderAfter?: boolean;
}

export class Typewriter {
	private static readonly DEFAULT_OPTIONS: TypewriterOptions = {
		typeDelay: 50,
		human: true,
		autoStart: false,
		logSteps: false,
		renderAfter: true,
	};

	private state: TypewriterState = TypewriterState.STOPPED;
	private eventQueue: QuededEvent[] = [];
	private readyForNextLoop = true;

	private timeoutHandle: number;

	public constructor(private element: HTMLElement, private options: TypewriterOptions = {}) {
		this.options = Object.assign({}, Typewriter.DEFAULT_OPTIONS, options);
		this.log('Initialized...');
		if (this.options.autoStart) this.startLoop();
	}

	private startLoop() {
		if (this.timeoutHandle) return;
		this.state = TypewriterState.WORKING;
		this.timeoutHandle = window.setInterval(() => {
			if (this.readyForNextLoop) this.loop();
		}, 50);
		this.log('Started loop...');
	}

	private stopLoop() {
		if (this.timeoutHandle) window.clearInterval(this.timeoutHandle);
		this.timeoutHandle = undefined;
		this.log('Stopped loop...');
	}

	private loop() {
		this.readyForNextLoop = false;

		this.log(`Current state is ${this.state}`);

		if (this.state === TypewriterState.PAUSED || this.state === TypewriterState.STOPPED) {
			const nextEvent = this.getNextEventSafe();
			if (nextEvent && nextEvent[0] === 'start') this.state = TypewriterState.WORKING;
			this.readyForNextLoop = true;
			return;
		}

		const nextEvent = this.getNextEvent();
		if (!nextEvent) {
			this.state = TypewriterState.STOPPED;
			this.log('No more events, stopping...');
			this.stopLoop();
			return;
		}

		const eventType = nextEvent[0];
		const eventValue = nextEvent[1];

		this.log(`Starting event of type ${eventType}`);

		switch (eventType) {
			case 'stop':
				this.state = TypewriterState.STOPPED;
				this.stopLoop();
				break;

			case 'pause':
				this.state = TypewriterState.PAUSED;
				this.log('Pausing loop...');
				break;

			case 'pauseFor':
				this.state = TypewriterState.PAUSED;
				this.log('Starting loop pause...');
				after(eventValue as EventValue<'pauseFor'>, () => {
					this.state = TypewriterState.WORKING;
					this.log('Finished loop pause...');
				});
				break;

			case 'typeText':
				this.state = TypewriterState.PAUSED;
				this.log(`Starting to type text '${eventValue}'...`);
				this.type(eventValue as EventValue<'typeText'>, false).then(() => {
					this.state = TypewriterState.WORKING;
					this.log('Finished typing text...');
				});
				break;

			case 'pasteText':
				this.state = TypewriterState.PAUSED;
				this.log(`Pasting text '${eventValue}'...`);
				this.paste(eventValue as EventValue<'pasteText'>, false);
				this.state = TypewriterState.WORKING;
				break;

			case 'typeHTML':
				this.state = TypewriterState.PAUSED;
				this.log(`Starting to type HTML '${eventValue}'...`);
				this.type(eventValue as EventValue<'typeText'>, true).then(() => {
					this.state = TypewriterState.WORKING;
					this.log('Finished typing HTML...');
				});
				break;

			case 'pasteHTML':
				this.state = TypewriterState.PAUSED;
				this.log(`Pasting HTML '${eventValue}'...`);
				this.paste(eventValue as EventValue<'pasteHTML'>, true);
				this.state = TypewriterState.WORKING;
				break;

			case 'execute':
				this.state = TypewriterState.PAUSED;
				this.log(`Executing function ${eventValue}`);
				const func = eventValue as EventValue<'execute'>;
				const result = func();
				if (result instanceof Promise) {
					result.then(() => {
						this.state = TypewriterState.WORKING;
						this.log(`Finished executing ${eventValue}`);
					});
				} else {
					this.state = TypewriterState.WORKING;
					this.log(`Finished executing ${eventValue}`);
				}
				break;
		}

		this.readyForNextLoop = true;
	}

	private async type(content: string, render: boolean) {
		return new Promise<void>((resolve) => {
			let i = 0;
			const {typeDelay, human} = this.options;

			const recurse = () => {
				if (i < content.length) {
					const speed = human ? Math.random() * typeDelay : typeDelay;
					after(speed, () => {
						if (render) this.element.innerHTML += content.charAt(i);
						else this.element.textContent += content.charAt(i);
						this.element.scrollIntoView();
						i++;
						recurse();
					});
				} else {
					resolve();
					if (this.options.renderAfter) this.element.innerHTML = content;
				}
			};

			recurse();
		});
	}

	private paste(content: string, render: boolean) {
		if (render) this.element.innerHTML += content;
		else this.element.textContent += content;
		this.element.scrollIntoView();
	}

	public start() {
		if (this.state === TypewriterState.STOPPED) {
			this.startLoop();
		} else this.queueEvent(['start', undefined]);
		return this;
	}

	public pause() {
		this.queueEvent(['pause', undefined]);
		return this;
	}

	public pauseFor(value: EventValue<'pauseFor'>) {
		this.queueEvent(['pauseFor', value]);
		return this;
	}

	public stop() {
		this.queueEvent(['stop', undefined]);
		return this;
	}

	public typeText(value: EventValue<'typeText'>) {
		this.queueEvent(['typeText', value]);
		return this;
	}

	public pasteText(value: EventValue<'pasteText'>) {
		this.queueEvent(['pasteText', value]);
		return this;
	}

	public typeHTML(value: EventValue<'typeHTML'>) {
		this.queueEvent(['typeHTML', value]);
		return this;
	}

	public pasteHTML(value: EventValue<'pasteHTML'>) {
		this.queueEvent(['pasteHTML', value]);
		return this;
	}

	public execute(value: EventValue<'execute'>) {
		this.queueEvent(['execute', value]);
		return this;
	}

	private queueEvent(event: QuededEvent) {
		this.eventQueue.push(event);
		return this;
	}

	private getNextEvent() {
		const nextEvent = this.eventQueue.splice(0, 1);
		if (!nextEvent || !nextEvent.length) return;
		return nextEvent[0];
	}

	private getNextEventSafe() {
		const nextEvent = this.eventQueue.slice(0, 1);
		if (!nextEvent || !nextEvent.length) return;
		return nextEvent[0];
	}

	private log(content: string) {
		if (this.options.logSteps) console.log('Typewriter: ' + content);
	}
}
