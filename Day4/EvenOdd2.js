//cheking even odd without % or bitwise operator

function checkEvenOdd(num) {
  if (parseInt(num / 2) * 2 === num) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOdd(8); // Even
checkEvenOdd(13); // Odd
