import test from 'ava';
import generateRandomNumbers from './index.js';

test('generate n random numbers', t => {
	const minValue = 1;
	const maxValue = 100;
	const length = 100;
	const randomNumbers = generateRandomNumbers(length, minValue, maxValue);

	const randomNumbersArray = randomNumbers();

	if (randomNumbersArray.length !== length) {
		t.fail();
	}

	for (const value of randomNumbersArray) {
		if (value < minValue || value > maxValue) {
			t.fail();
		}
	}

	t.pass();
});

test('generate n unique random numbers', t => {
	const minValue = 1;
	const maxValue = 100;
	const length = 100;
	const numbersSet = new Set();

	const randomNumbers = generateRandomNumbers(length, minValue, maxValue, true);

	const randomNumbersArray = randomNumbers();

	if (randomNumbersArray.length !== length) {
		t.fail();
	}

	for (const value of randomNumbersArray) {
		if (value < minValue || value > maxValue) {
			t.fail();
		}

		if (numbersSet.has(value)) {
			t.fail();
		}

		numbersSet.add(value);
	}

	t.pass();
});
