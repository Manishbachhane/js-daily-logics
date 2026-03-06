let arr = [1,2,3,5];
let n= arr.length+1;

let sum = (n*(n+1))/2;

let arrSum=0;
for(let num of arr){
  arrSum+=num;
}

console.log(sum-arrSum);