//i am making call back function 
function f1(num, p1, p2) {
  if (num == 1)
    p1();
  else
    p2();
}
f1(2, () => {
  console.log("p1");
}, () => {
  console.log("p2");
})