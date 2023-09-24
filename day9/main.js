const myStudents = ["Hoang", "Hong", "Chuc", "Kien"];
let products = ["san pham 1", "san pham 2", "san pham 3", "san pham 4"];

// let product1 = "san pham 1";

/**
 * Array: Là mảng và sử dụng trong các trường hợp cần liệt kê...
 * Khai báo:
 * 1. Sử dụng []
 * 2. Đo độ dài mảng
 * 3. Chỉ số (index) của các phần tử trong mảng
 * 4. Mảng rỗng
 * 5. Phương thức của mảng.
 * 6. Mảng là 1 kiểu dữ liệu tham chiếu
 * 7. Array là một dạng Object đặc biệt, mà trong array thì index đóng vai trò làm "key"
 */

let emptyArray = [];
console.log(emptyArray.length);

//! Học viên tìm hiểu thêm các cách khai baó mảng trong JS

// console.log(typeof products);

// Đo độ dài của mảng.
console.log(myStudents.length);

// Các phần tử trong mảng có thể khác kiểu dữ liệu
const mixArr = [1, 2, 4, -1, "hello", { name: "Hoang" }, null, undefined];

let a;
console.log(a);
console.log(myStudents[4]); // undefined
console.log(myStudents[-1]); // undefined

let productsList = ["iphone pro 15", "macbook air 14"];
let myCart = productsList;
// myCart, productsList là 2 biến cùng trỏ vào 1 ô nhớ. dẫn đến khi thay đổi 1 mảng, mảng kia cũng thay đổi.
// myCart.push("airpot pro 2");
// console.log(myCart);
console.log("productsList: ", productsList);

let myCart2 = [...productsList];
myCart2.push("xe honda sh");
console.log(myCart2);
console.log(productsList);

//! Học viên tìm hiểu thêm các cách copy mảng trong JS

/**
 * Object:
 * 1. Khái niệm: là cách mà ngôn ngữ lập trình mô phỏng một thực thể (đối tượng) trong cuộc sống. VD: thông tin cá nhân, thông tin sản phẩm...
 * 2. Khai báo:
 */

const myInfor = {
  name: "Tèo",
  age: 32,
  address: "Làng Vũ Đại",
};

const user = {
  userName: "hotboydatinh",
  password: "12345678hgygygh",
  status: false,
  Tangai: function () {
    console.log("Tán gái!");
    // Phương thức thường mô tả hành động, tính năng của đối tượng
  },
};

// console.log(user.Tangai());
console.log(user.userName);
console.log(user["userName"]);

const users = [
  {
    userName: "hotboydatinh",
    password: "12345678hgygygh",
  },
  {
    userName: "bengoan2k",
    password: "jhdjshdeinjdbfdnbc",
  },
];

// Đo số lượng thuộc tính, phương thức của Object bằng cách nào?
console.log(user.length); // Không được đâu.
//! Gợi ý: Chuyển object về array sau đó đo độ dài.

/**
 * Function
 * 1. Khái niệm: Là cách nhóm các câu lệnh vào với nhau để thực hiện 1 nhiệm vụ chuyên biệt, có tính tái sử dụng cao.
 * 2. Hàm có thể có tham số hoặc không có tham số
 * 3. Hàm thì có thể có trả về (return) hoặc không. (in ra lời thực hiện một hàm mà không có return thì nhận "undefined")
 * 4. Tất cả lệnh viết sau return đều không được thực hiện
 * 5. Naming function có tính chất hoisting.
 * 6. Có một số loại function khác: arrow function, anonymous function.
 */

sum(1, 5);
// Function hoisting
function sum(a, b) {
  // return a + b;
  console.log(a + b);
}
// console.log(sum(1, 3));
sum(1, 3);

function hello(name) {
  console.log(`Xin chào ${name}, chúc bạn 1 ngày vui!`);
  return;
  console.log("ahii");
}

hello("Tèo");

// arrow function
const sum2 = (a, b) => {
  return a + b;
};

// arrow function: viết rút gọn khi chỉ có 1 câu lệnh duy nhất
const sum3 = (a, b) => a + b;

//TODO: BTVN
function tongSoNguyenTo(a, b) {
  // B1: Kiểm tra bắt buộc a, b là số nguyên dương và a phải nhỏ hơn b
  // B2: Tính tổng các số nguyên tố trong khoảng từ a đến b (tính cả a và b nếu chúng là số nguyên tố)
}
