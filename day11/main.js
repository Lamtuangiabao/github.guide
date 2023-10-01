const product = {
  id: "1",
  name: "San pham A",
  price: 200,
};

// const productJSON = JSON.stringify(product);
// console.log(productJSON);
// console.log(productJSON.length);
// console.log(typeof productJSON);

// localStorage.setItem("product", JSON.stringify(product));
// console.log(JSON.parse(localStorage.getItem("product")));

// const userName = prompt("Enter your name...");
// setTimeout nhận vào 2 đối số, đối số thứ nhất là 1function, đối số thứ 2 là số miliseconds.
// Sau x miliseconds sẽ thực hiện function.
// setTimeout(() => welcome(userName), 3000);
// callback: truyền 1 function vào làm đối số của 1 function khác.

// function welcome() {
//   console.log(`Xin chao`);
// }

// const myInterval = setInterval(welcome, 1000);
// if (dieukien) {
//   clearInterval(myInterval);
// }

/** Bất đồng bộ
 *
 *
 *
 */

function a() {
  console.log("giai quyet cong viec A");
}

function b() {
  console.log("giai quyet cong viec B can ket qua cua A");
}

setTimeout(a, 3000);
b();

//! TODO: lightmode/darkmode -> set lựa chọn của người dùng vào localStorage -> lần sau người dùng truy cập lại thì lấy cái lựa chọn trước đó của người dùng để hiện thị giao diện
