/**
 * Generate n random numbers in [min,max] interval
 *
 * @returns An function that returns an array of n numbers, where each number is in [min,max] interval
 * @example
    ```
    import generateRandomNumbers from '@aprodan/generate-random-numbers';

    const randomNums = generateRandomNumbers(10, 1, 10);
    console.log("Generated nums=", randomNums());
    ```
*/

export default function generateRandomNumbers(n: number, min: number, max: number, unique?: boolean): () => [number];
