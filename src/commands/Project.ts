import {Terminal} from '../terminal/Terminal';
import {Line, LineType} from '../terminal/Line';
import {Executor} from '../commander/command/Executor';
import {Command} from '../commander/command/Command';
import {Sender} from '../commander/command/Sender';
import {Description} from '../commander/command/Description';

interface ProjectInfo {
	key: string;
	name: string;
	description: string;
	imageURL: string;
}

class Project implements Executor {
	private projects: ProjectInfo[] = [
		{
			key: 'portfolio-website',
			name: 'This Portfolio Website',
			description: 'A virtual terminal with custom command interpreter and typewriter.',
			imageURL: 'https://i.ibb.co/WsvFFnz/image.png',
		},
		{
			key: 'portfolio-brochure',
			name: 'Portfolio Brochure',
			description: 'A small portfolio brochure made in InDesign in the style of a terminal.',
			imageURL: 'https://i.ibb.co/zmGhsbj/image.png',
		},
		{
			key: 'spy-talk',
			name: 'Spy Talk Skit',
			description: 'A short scripted video shot and edited in Premiere Pro.',
			imageURL: 'https://i.ibb.co/vdP9yV1/image.png',
		},
		{
			key: 'trailer-remix',
			name: 'Trailer Remix',
			description: 'A trailer genre mix-up project made in Premiere Pro.',
			imageURL: 'https://i.ibb.co/6Rtc8V4/image.png',
		},
		{
			key: 'character-creation',
			name: 'Ferb As Myself',
			description: 'Ferb from Phineas and Ferb recreated as myself in Illustrator.',
			imageURL: 'https://i.ibb.co/bN2sZmK/image.png',
		},
		{
			key: 'animate-gif-project',
			name: 'Animate GIF Project',
			description: 'A terminal themed typing animation GIF created in Animate.',
			imageURL: 'https://i.ibb.co/3pkHyqH/image.png',
		},
		{
			key: 'animate-unit-project',
			name: 'Animate Unit Project',
			description: 'A technology themed GIF animation created in Animate.',
			imageURL: 'https://i.ibb.co/FJ3Cyw9/image.png',
		},
		{
			key: 'mini-webpage',
			name: 'Mini Reading Website',
			description: 'A mini website about my reading experiences created in Spark.',
			imageURL: 'https://i.ibb.co/PhR5Y8Z/image.png',
		},
		{
			key: 'album-cover',
			name: 'In Rainbows Album Cover',
			description: `An album cover remake based on 'In Rainbows by Radiohead'.`,
			imageURL: 'https://i.ibb.co/hY7vHhZ/image.png',
		},
		{
			key: 'logo-creation',
			name: 'Ovie Logo',
			description: 'A custom logo for a different project created in Illustrator.',
			imageURL: 'https://i.ibb.co/F8CCk8c/image.png',
		},
		{
			key: 'podcast-creation',
			name: 'Tutorial Hell Podcast',
			description: 'A six minute podcast talking about how to get out of tutorial hell.',
			imageURL: 'https://i.ibb.co/HKMtwbb/image.png',
		},
	];

	public async run(cmd: Command, args: string[], sender: Sender, label: string) {
		if (!(sender instanceof Terminal)) return;

		let projectKey = args[0];
		if (!projectKey) {
			await sender.sendMessage(
				Line.of(`You must specify a project you want to look at, try 'project list'.`),
			);
			return;
		}

		projectKey = projectKey.toLowerCase();

		if (projectKey === 'list') {
			const response: Line[] = [];

			response.push(Line.of('Projects I have worked on:').setType(LineType.START));
			this.projects.forEach((project) => {
				response.push(
					Line.of(`'${project.key}'`)
						.setType(LineType.INDENT)
						.setIndentLevel(1)
						.setAnimationSettings({speed: 1}),
				);
			});
			response.push(
				Line.of(`Now try 'project [name]' to get the details!`).setType(LineType.END),
			);

			for (const line of response) {
				await sender.sendMessage(line);
			}

			return;
		}

		const projectToDescribe = this.projects.find((project) => project.key === projectKey);

		const response: Line[] = [];

		response.push(Line.of(`${projectToDescribe.name}:`).setType(LineType.START));
		response.push(Line.of(projectToDescribe.description).setType(LineType.RAW));
		response.push(
			Line.of(
				`<img src="${projectToDescribe.imageURL}" alt="${projectToDescribe.key} Image">`,
			).setType(LineType.RAW),
		);
		response.push(Line.of(`To view other projects, use 'project list'.`).setType(LineType.END));

		for (const line of response) {
			await sender.sendMessage(line);
		}
	}
}

export const ProjectCommand = Command.new(
	'project',
	Description.of('View my different projects.'),
).setExecutor(new Project());
