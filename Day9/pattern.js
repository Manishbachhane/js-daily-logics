/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14  15
*/
var n = 5;
var count = 1;
for (var i = 1; i <= n; i++) {
  var row = "";
  for (var j = 1; j <= i; j++) {
    row = row + count + " ";
    count++;
  }
  console.log(row);
}
