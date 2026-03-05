// Array me se duplicate elements remove karo.


let arr=[1,2,2,3,4,5];
let newArr=[];
let obj={};
for(let i=0;i<arr.length;i++){
  let num=arr[i];
  obj[num]=(obj[num]||0)+1;
  newArr
}

for(let key in obj){
  newArr.push(+key);
}
console.log(obj);
console.log(newArr);