const arr = [3, 12, 7, 25, 10, 15];

let count = 0;

for (let num of arr) {
  if (num > 10) {
    count++;
  }
}

console.log(count); // Output: 3
