//chek prime number 

// var num = 153;
// var flag = 1;
// for (var i = 2; i < num; i++) {
//   if (num % i == 0) {
//     flag = 0;
//     console.log("not prime");
//     break;
//   }
// }
// if (flag) {
//   console.log("prime number");
// }

var num = 11;
var b;
b = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0)
      return "not prime";
  }
  return "prime";
}

console.log(b(num));