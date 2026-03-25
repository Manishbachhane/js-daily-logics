console.log('crud on arry uing functions');

let arr=[1,2,3,4,5];

function append(element){
  if(element==undefined){
    console.log('noting to append');
    console.log(arr);
    return;
  }
  console.log("append  succesfull")
    arr.push(element);
  console.log(arr);
}

function deleteLast(){
  if(arr.length==0){
    console.log("array is empty");
    return;
  }else{
    arr.pop();
    console.log("Last delete succesfull");
    console.log(arr);
  }
}

function deleteFirst(){
  if(arr.length==0){
    console.log("array is empty");
    return;
  }else{
    arr.shift();
    console.log("First delete succesfull");
    console.log(arr);
  }
}

function insertAt(index,elem){
  if(index<0 ||  elem==undefined){
    console.log("not inserted");
    return;
  }else{
    if(index>arr.length){
      console.log("index is out of bound");
      return;
    }
    arr.splice(index,0,elem);
    console.log("inserted succesfull");
    console.log(arr); 
  }
}

function deleteAt(index){
  if(index<0){
    console.log("not deleted");
    return;
  }else{
    if(index>=arr.length){
      console.log("index is out of bound");
      return;
    }
  } 
  console.log("deleted succesfull",  arr.splice(index,1));
  // arr.splice(index,1);
  console.log(arr); 
}
function insertFirst(element){
  if(element==undefined){
    console.log('noting to insert');
    console.log(arr);
    return;
  }
  console.log("inserted at first succesfull")
    arr.unshift(element);
  console.log(arr);
}

append();
insertFirst(8);
deleteLast();
deleteFirst();  
insertAt(3,10);
deleteAt(3);

console.log(arr);




