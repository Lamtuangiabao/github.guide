/**
 * Nội dung bài học:
 * 1. Khái niệm JS
 * 2. Độ phổ biến, thịnh hành
 * 3. Lịch sử
 * 4. Các cách nhúng JS vào HTML: 2 cách.
 * 5. Khai báo biến: var, let, const
 * - Tìm hiểu thêm: hoisting trong js
 * 6. Các kiểu dữ liệu (đơn giản - tham trị):
 * - Number
 * - String
 * - Boolean(true, false)
 * - Null
 * - Undefined
 * - Symbol
 * - NaN: Not a number
 *
 * - Tìm hiểu thêm: ép kiểu, trusthy, falsy, đối tượng "Math" trong js, !!
 *
 * 7. Toán tử
 */

// console.log(a);
// let a = 10;
// a = 11;
// console.log(a);

// const name = "HoangNM";
// name = "Tèo";
let age = 19;

let myAge = 23;
myAge++;

let totalStudent = 46;
// Thêm 1 học vien vao lop:
totalStudent = totalStudent + 1;
totalStudent += 1;

hoadon = 900002;
soLuongNguoi = 4;
phaiTra = hoadon % soLuongNguoi;
console.log(typeof phaiTra);
myName = "Tèo";

console.log("Xin chào " + myName);
console.log("Xin chào", myName);
console.log(`Xin chào ${myName}`);

let x = 10;
console.log(typeof x);
let y = "10";
console.log(!!y);
// console.log(x / y);
// console.log(x === y);

let boolean1 = true;
let boolean2 = false;
console.log(boolean1 && boolean2);
console.log(boolean1 || boolean2);
console.log(!boolean1);

console.log(true && true);
console.log(true && false);
console.log(false || false);

console.log(0 && false);

const text = "Nguyen Minh Hoang";
console.log("Kiem tra do dai chuoi: ", text.length);

/**
 * 1. Giải phương trình bậc 2 với 3 đối số a, b, c
 * 2. Tính chỉ số BMI của người có chiều cao là x m và cân nặng là y kg biết BMI = cân nặng / (chiều cao x chiều cao)
 * 3. Kiểm tra xem 1 số có phải là số lẻ, số chính phương, số nguyên tố, số hoàn hảo hay không?
 */

// Bài 2:
const cannang = 60;
const chieucao = 1.7;

const BMI = Math.trunc(cannang / (chieucao * chieucao));
console.log(`Chỉ số BMI của bạn là: ${BMI}`);

// Bài 3: Tìm ra số lẻ:
var myNumber = "Hoang";
if (typeof myNumber === "number" && myNumber % 2 !== 0) {
  console.log(`${myNumber} là một số lẻ`);
} else {
  console.log(`${myNumber} không là số lẻ`);
}

let welcome = "Xin chao moi nguoi!";
console.log(welcome.lastIndexOf("n"));

var firstName = "Hoang";
var lastName = "Nguyen";
var fullName = firstName + " " + lastName;
var fullName2 = firstName.concat(" ", lastName);
// console.log(fullName2);

/**
 * Hàm built-in: console, prompt, confirm, alert...
 */

console.error("test console");

// let isName = prompt("Moi nhap ten cua ban vao day: ");
// console.log("ahihi");

// let yourIdol = confirm("Ban co than tuong Den Vau khong?");

alert("Xin chao moi nguoi!");
