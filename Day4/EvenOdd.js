//cheking even odd without % modules 
function checkEvenOdd(num) {
  if ((num & 1) === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOdd(10); // Even
checkEvenOdd(7);  // Odd
