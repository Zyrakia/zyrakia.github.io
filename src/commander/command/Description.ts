export class Description {
	static readonly EMPTY = new Description('');

	private description: string;

	constructor(description: string) {
		this.description = description;
	}

	static of(description: string) {
		return new Description(description);
	}

	public getDescription() {
		return this.description;
	}

	public setDescription(description: string) {
		this.description = description;
	}
}
