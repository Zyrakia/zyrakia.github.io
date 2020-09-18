class StringPredictor {
	private values: string[] = [];

	constructor(...defaults: string[]) {
		this.push(...defaults);
	}

	public predict(input: string, returnRandom = true, returnTrimmed = true) {
		if (!input) return '';

		const predictions: string[] = [];

		this.values.forEach((value) => {
			if (value.toLowerCase().startsWith(input.toLowerCase())) {
				predictions.push(value);
			}
		});

		if (!predictions.length) return '';

		if (returnRandom) {
			const prediction = predictions[Math.floor(Math.random() * predictions.length)];
			if (returnTrimmed) return prediction.substring(input.length);
			else return prediction;
		} else return predictions;
	}

	public push(...values: string[]) {
		this.values.push(...values);
	}

	public set(newValues: string[]) {
		this.values = newValues;
	}
}
