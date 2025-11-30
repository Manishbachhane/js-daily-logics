//factorial 
var num = 12;
var temp = num;
var fac = 1;
while (temp) {
  fac = fac * temp;
  temp--;
}
console.log(`Factorial of ${num} is ${fac}`);