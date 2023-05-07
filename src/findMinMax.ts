const numbers: number[] = [3, 5, 1, 9, 2, 7];

function getMaxNum(...arg: number[]): number[] {
  const min = Math.min(...arg);
  const max = Math.max(...arg);
  return [min, max];
}

const [minValue, maxValue] = getMaxNum(...numbers);

console.log(`Minimum value: ${minValue}`);
console.log(`Maximum value: ${maxValue}`);
