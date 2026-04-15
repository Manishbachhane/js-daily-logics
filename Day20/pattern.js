function fun(){

let num=1;
    for(let i=1;i<=4;i++){
      let row="";
      for(let j=1;j<=7;j++){
        if(j>=i&&j<=8-i){
          row+=j;
        }else{
          row+=" ";
        }
      }
      console.log(row);
    }

}

fun();