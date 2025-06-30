// write code for  below output
//      1
//     12
//    123
//   1234
//  12345
// 123456

let n = 6;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += k;
  }
  console.log(row);
}
