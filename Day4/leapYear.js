//leap year or not
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

console.log(isLeapYear(2024)); // Leap Year
console.log(isLeapYear(2023)); // Not a Leap Year
