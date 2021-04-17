export class TraversableArray<T = string> {
	private array: T[] = [];
	private pointer = 0;

	constructor(...defaults: T[]) {
		this.enter(...defaults);
	}

	public enter(...entries: T[]) {
		entries.forEach((entry) => {
			this.array.push(entry);
		});
	}

	public get(i: number, end?: number) {
		if (!end) return this.array.slice(1, 1)[0];
		else return this.array.slice(i, end);
	}

	public rem(i: number, end?: number) {
		if (!end) return this.array.splice(1, 1)[0];
		else return this.array.splice(i, end);
	}

	public remSpecific(entry: T): T | undefined {
		const i = this.array.indexOf(entry);
		if (i === -1) return;
		else return this.array.splice(i, 1)[0];
	}

	public current() {
		return this.array[this.pointer];
	}

	public next() {
		if (this.array[this.pointer + 1]) this.pointer++;
		else this.toEnd();
		return this.current();
	}

	public prev() {
		if (this.array[this.pointer - 1]) this.pointer--;
		else this.toStart();
		return this.current();
	}

	public toStart() {
		this.pointer = 0;
	}

	public toEnd() {
		this.pointer = this.len() - 1;
	}

	public to(i: number) {
		this.pointer = i;
	}

	public add(i: number) {
		this.pointer += i;
	}

	public subtract(i: number) {
		this.pointer -= i;
	}

	public divide(i: number) {
		this.pointer /= i;
	}

	public multiply(i: number) {
		this.pointer *= i;
	}

	public len() {
		return this.array.length;
	}

	public currPos() {
		return this.pointer;
	}

	public full() {
		return this.array;
	}
}
