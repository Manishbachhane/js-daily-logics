//star pattern
     // * 
    // * *
   // * * *
  // * * * *
 // * * * * *
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