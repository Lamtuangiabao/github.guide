// {
//   {
//     {
//       {
//         {
//           let y = 20;
//           {
//             let x = 10;
//             console.log(y);
//           }
//           // console.log(y);
//         }
//       }
//     }
//   }
// }

{
  // Block code chỉ được tối đa xx dòng thôi.
}

let thoiTiet = "dep";
let bancotien = true;

// Cách viết "if" thứ 1
// if (thoiTiet == "dep") {
//   console.log("Ru ban gai di choi!");
// }

// if (thoiTiet != "dep") {
//   console.log("Ru ban gai di xem phim!");
// }

// Cách viết "if" thứ 2
// if (thoiTiet == "dep") {
//   console.log("Ru ban gai di choi!");
// } else {
//   console.log("Ru ban gai di xem phim!");
// }

// Cách viết "if" thứ 3:
// if (thoiTiet == "dep" && bancotien) {
//   console.log("Ru ban gai di choi!");
// } else if (thoiTiet == "dep" && !bancotien) {
//   console.log("Ru ban gai di an bun dau!");
// } else {
//   console.log("O nha!");
// }

// if (2) {
//   console.log(2);
// }

/** Truthy and falsy:
falsy khi:
1. false
2. 0
3. -0
4. ""
5. null
6. undefined
7. NaN
Các trường hợp còn lại đều là truthy.
 */

/**
 * Vòng lặp!
 */

console.log("Em xin loi vi em da khong hoc bai!");
let index = 0;
for (; index < 1000; index++) {
  if (index < 1000) {
    console.log("Em xin loi vi em da khong hoc bai!");
  } else {
    break;
  }
}

// const formElement = document.getElementById("form");

// formElement.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

const userNameElement = document.getElementById("userName");
console.log(userNameElement.value);
