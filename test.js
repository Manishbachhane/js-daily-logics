//missing number

let arr1=[1,12,13,5];

function missingNumber(arr){
    console.log(arr);
    let n=arr.length+1;
    let sum=(n*(n+1))/2;
    console.log(sum);
    let arrSum=0
    for(let x of arr){
        arrSum+=x;
    }
    console.log(sum-arrSum);
}

// missingNumber(arr1);


function secondMax(arr){
    console.log(arr);
    let max=-Infinity;
    let secMax=-Infinity;
    
    for(let x of arr){
      if(max<x){
        secMax=max;
        max=x
      }else if(secMax!=max && secMax<x){
        secMax=x;
      }

    }
    console.log(secMax);
}

// secondMax(arr1);


function pattern(){
  for(let i=5;i>=0;i--){
    let row="";
    for(let k=i;k>=0;k--){
      row+=" "
    }
    for(let j=5;j>i;j--){
      row+="* ";
    }
    console.log(row);
  }
}

pattern();