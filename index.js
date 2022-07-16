
function generateRandomNumber(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

export default function generateRandomNumbers(n, min, max, unique = false) {
	return function () {
		const randomNumbers = [];

		if (unique) {
			const valuesSet = new Set();
			while (randomNumbers.length < n) {
				const randomNumber = generateRandomNumber(min, max);

				if (!valuesSet.has(randomNumber)) {
					randomNumbers.push(randomNumber);
					valuesSet.add(randomNumber);
				}
			}
		} else {
			for (let i = 0; i < n; i++) {
				randomNumbers.push(generateRandomNumber(min, max));
			}
		}

		return randomNumbers;
	};
}
