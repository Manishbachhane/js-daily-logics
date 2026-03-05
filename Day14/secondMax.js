//second max number  by single loop

let arr=[1123, 187, 41, 56, 92, 14, 78, 65, 33, 90, 27, 48, 71, 19, 189];

function secondMax(arr1){
  let max=-Infinity,secondMax=-Infinity;
  for(let i=0;i<arr1.length;i++){
    if(max<arr1[i]){
      secondMax=max;
      max=arr1[i];
    }else if(arr1[i]>secondMax && arr1[i]!=max){
      secondMax=arr1[i];
    }
  }
  console.log(max,secondMax);
}
 
secondMax(arr);