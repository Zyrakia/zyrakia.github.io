function after<T = void>(ms: number, doThis: (...args: any[]) => T, ...withThese: any[]) {
	return new Promise<T>((res) => {
		const exec = () => (withThese ? res(doThis(...withThese)) : res(doThis()));
		ms ? window.setTimeout(exec, ms) : exec();
	});
}
