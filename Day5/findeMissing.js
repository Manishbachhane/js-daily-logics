function findMissing(arr, N) {
  const totalSum = (N * (N + 1)) / 2;

  let arraySum = 0;
  for (let num of arr) {
    arraySum += num;
  }

  return totalSum - arraySum;
}

console.log(findMissing([1, 2, 4, 5], 5));
