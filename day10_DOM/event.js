/**
 * Có 3 cách để chỉ định sự kiện cho element:
 * - Dùng html
 * - Dùng js
 * - Dùng key addEventListener
 */

function welcome() {
  alert("Xin chao ca lop!");
}

const buttonElement = document.getElementsByClassName("btn")[0];
// console.log(buttonElement);
// buttonElement.onclick = welcome;

buttonElement.addEventListener("click", () => welcome());
