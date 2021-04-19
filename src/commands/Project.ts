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
	imageURL?: string;
}

class Project implements Executor {
	private projects: ProjectInfo[] = [
		{
			key: 'portfolio-website',
			name: 'This portfolio website',
			description: 'A virtual terminal with custom command interpreter and typewriter.',
			imageURL: 'https://i.ibb.co/WsvFFnz/image.png',
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
