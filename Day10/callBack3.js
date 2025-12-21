//handling time with callback 

function f1(time, cb) {
  setTimeout(cb, time);
}
let time = 1000;
f1(time, () => {
  console.log("async");
})