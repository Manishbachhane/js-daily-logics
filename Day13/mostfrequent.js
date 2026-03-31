let arr=[1,1,3,2,2,2,2,2,2,2,1];

function MostFrequent(arr1){
  let fre={};
  let maxCount=0;
  let maxNumber;

  for(let i=0;i<arr.length;i++){
    let num=arr[i];
    fre[num]=(fre[num]||0)+1;

    if(fre[num]>maxCount){
      maxCount=fre[num];
      maxNumber=num;
    }

  }

  console.log(maxCount,maxNumber);
}

MostFrequent(arr);
