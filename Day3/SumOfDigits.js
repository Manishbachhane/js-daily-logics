function sumOfDigits(num) {
  let digits = num.toString().split("");
  let sum = 0;

  for (let d of digits) {
    sum += Number(d);
  }

  return sum;
}

console.log(sumOfDigits(1234));
