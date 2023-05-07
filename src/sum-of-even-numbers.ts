const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = numbers.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    return acc + cur;
  } else {
    return acc;
  }
}, 0);

console.log(sumOfEvenNumbers); // Output: 30
