function fun(){
  for(let i=6;i>=1;i--){
    let row="";
    //space
    for(let s=1;s<=6-i;s++){
        row+=" ";
    }
    for(let x=i;x>=1;x--){
      row+=x;
    }
    for(let y=2;y<=i;y++){
      row+=y;
    }

    console.log(row);

  }
}

fun();