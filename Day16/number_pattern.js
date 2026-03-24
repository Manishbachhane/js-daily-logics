function fun(){
  let count =0
  for(let i=1;i<=5;i++){
    let str="";
    for(let j=1;j<i;j++){
    // console.log()
    count++;
    str+=count;
    }
    console.log(str);
  }   
}
fun();