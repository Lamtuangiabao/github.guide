const myInfor = {
  name: "Nguyễn Minh Hoàng",
  age: 32,
  address: "Hanoi, VietNam",
};

const inforElement = document.getElementsByClassName("infor")[0];
console.log(inforElement);
// inforElement.innerHTML = `
//   <h2>${myInfor.name}</h2>
//   <p>Tuổi: ${myInfor.age}</p>
//   `;

let h2Element = document.createElement("h2");
// h2Element.innerHTML = `${myInfor.name}`;
h2Element.style.color = "red";
// h2Element.classList.add("title");
// let ageElement = document.createElement("p");

// ageElement.innerHTML = `${myInfor.age}`;
// inforElement.appendChild(h2Element);
const datas = ["sanpham A", "san pham B", 3, 4];
// thay vì fake data thì gọi API để lấy data real
const myString = `
${datas.map((data) => `<h2>${data}</h2>`).join("")}
`;

console.log(myString);
inforElement.innerHTML = myString;
