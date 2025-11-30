var a = 123;
var reverse = 0;
var temp = a;
while (temp) {
  reverse = reverse * 10;
  reverse = reverse + temp % 10;
  temp = parseInt(temp / 10);
}
console.log(reverse);