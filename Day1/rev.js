// let num = 231121231;
// let revnum = 0;

// while (num) {
//   revnum = revnum * 10 + num % 10;
//   num = parseInt(num / 10);
// }
// console.log(revnum);

//using srting
let num = 4321;
let numStr = num.toString();
let rev = numStr.split('');//kya yh array he 
let rev1 = numStr.split('').reverse().join('');
console.log(rev1);
