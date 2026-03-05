// Array me aise do numbers find karo jinka sum given target ke equal ho.

let arr1=[0,1,2,3,4,5];
let target=5;

function targetNumber(arr){
  console.log(arr);
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]===target){
        console.log(arr[i]+" + "+arr[j]+" = "+target);
      }
    }
  }
}

targetNumber(arr1)