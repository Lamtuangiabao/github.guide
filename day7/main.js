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

/**
 * 1. Giải phương trình bậc 2 với 3 đối số a, b, c
 * 2. Tính chỉ số IBM của người có chiều cao là x cm và cân nặng là y kg
 * 3. Kiểm tra xem 1 số có phải là số lẻ, số chính phương, số nguyên tố, số hoàn hảo hay không?
 */
