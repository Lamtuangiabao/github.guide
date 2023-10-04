const sum1 = (a, b) => {
  // function scope
  return a + b;
};

console.log(sum1(2, 3));

// Cách rút gọn: khi chỉ có 1 câu lệnh
const sum2 = (a, b) => a + b;

console.log(sum2(10, 20));

const fullName = (first, last) => ({
  ho: last,
  ten: first,
});

console.log(fullName("Hoang", "nguyen"));
const myInfor = {
  userName: "Nguyen Hoang",
  age: 32,
};

const app = document.getElementById("app");
app.innerHTML = `
  <h2>${myInfor.userName}</h2>
  <p>Tuổi ${myInfor.age}</p>
`;
import { Timer as DongHo, Timer2, Timer1 } from "./timer.js";

DongHo();
Timer1();
Timer2();

// Built-in functions
console.log("hang", "truc", 1, 2, 3, 4, 5);

// Toan tu rest
function myLog(...args) {
  console.log(...args);
}
myLog("hoang", "mai", "thanh");
// BTVN: Viet 1 ham sum() ma ko biet truoc so luong tham so

const classA = ["thanh", "mai"];
const classB = ["truc", "ma"];
const copyB = [...classB];
console.log(copyB);

const classNew = [...classA, ...classB];
console.log(classNew);

const myInfor2024 = {
  ...myInfor,
  age: 33,
};

console.log(myInfor2024);

const { name, age } = myInfor;
console.log(age);

const [sv1, ...other] = classNew;
console.log(sv1);

console.log(other);
const superArr = [[1, 2, 3]];
