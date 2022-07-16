# Generate Random Numbers
> Quickly generates an array of random numbers

## Install
```
$ npm install @aprodan/generate-random-numbers
```

## Usage
```js
import generateRandomNumbers from '@aprodan/generate-random-numbers';

const randomNumbers = generateRandomNumbers(10, 1, 10);

console.log('Random Numbers=', randomNumbers());
// => Random Numbers=[1,5,2,6,4,9,6,2,5,7]
```

## API
### generateRandomNumbers(n, min, max, unique = false)
* Returns a function, that when called, will return an array with n random numbers, where each number is in [min, max] interval.
* By default unique is false, and that means there is possible to have duplicate values in result.
