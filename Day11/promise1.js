/**
use for implementing responces of async functionality
it comes with three states that is
1.resolve 2.reject 3.pending
 where iach state is a call back 
 resolve indicate succes responce , reject indicate failure responce and panding indicate holding responce 
 by default promises are asyn in nature 
 */
console.log("before");

function demo() {
  return new Promise((resolve, reject) => {
    var flag = true;
    if (flag)
      resolve;
    else
      reject;
  })
}

demo().then(() => {
  console.log("succes");
}).catch(() => {
  console.log(" failure");
})
console.log("after");