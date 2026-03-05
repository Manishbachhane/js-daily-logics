//obj bne ga or key he toh sum print hoga

let arr1=[0,1,2,4,5];
let target=3;


function targetNumber(arr){
  let obj={};

  for(let num  of arr){
    let diff = target-num;
    if(obj[diff]){
      console.log(diff+" + "+num+" = "+target);
    }
      obj[num]=true;
  }
}

targetNumber(arr1);
