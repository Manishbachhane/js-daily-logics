const arr = [1, 2, 4, 7, 10, 11, 16];

let count = 0;

for (let num of arr) {
  if (num % 2 === 0) {
    count++;
  }
}

console.log(count); // 4
