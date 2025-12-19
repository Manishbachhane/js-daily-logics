console.log("before function");

function add(a, b, cb) {
  var res = a + b;
  setTimeout(() => {
    cb(res);
  }, 2000);
}

var a, b;
a = 10;
b = 20;
add(a, b, (result) => {
  console.log("add=" + result);
});

console.log("after  function");