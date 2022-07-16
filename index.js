
function generateRandomNumber(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

export default function generateNRandomNumbers(n, min, max) {
	return function () {
		const randomNumbers = [];

		for (let i = 0; i < n; i++) {
			randomNumbers.push(generateRandomNumber(min, max));
		}

		return randomNumbers;
	};
}
