function findCommonElements(arr1: number[], arr2: number[]): number[] {
  const results: number[] = [];

  for (const num of arr1) {
    if (arr2.includes(num) && !results.includes(num)) {
      results.push(num);
    }
  }

  return results;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6, 8];
console.log("result", findCommonElements(arr1, arr2));
