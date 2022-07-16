import {expectType} from 'tsd';
import generateRandomNumbers from './index.js';

const randomNumbers = generateRandomNumbers(10, 1, 10);
expectType<() => [number]>(randomNumbers);
expectType<[number]>(randomNumbers());
