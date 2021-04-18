import {Argument} from '../argument/Argument';
import {Command} from './Command';
import {Sender} from './Sender';

export interface Executor {
	run(cmd: Command, args: string[], sender: Sender, label: string): void | Promise<void>;
}
