//second max number  by single loop

let arr=[23, 87, 41, 56, 92, 14, 78, 65, 33, 90, 27, 48, 71, 19, 60];

function secondMax(arr1){
  let max=arr[0],secondMax=arr[0];
  for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
      secondMax=max;
      max=arr[i];
    }
  }


  console.log(max,secondMax);
}

secondMax(arr);