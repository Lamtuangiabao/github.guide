const form = document.getElementById("form");
const users = [];
// Cách 1: dùng 1 vòng for lấy toàn bộ value ra đổ vào một mảng.

// Khử hành vi mặc định của form
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// Cách 2: lấy từng value 1:

const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

// Validation Required
function validRequired(data) {
  if (!data) {
    // tra ra thong bao required
  }
  return;
}

// Validation length
function validLength(data, length) {
  if (data.length < length) {
    // valid length false
  }
  return;
}

function send() {
  // nếu nhiều hơn 3 field dữ liệu thì có thể nghĩ đến cách dùng vòng lặp.
  validRequired(emailElement.value);
  validRequired(passwordElement.value);
  // ...
  validLength(passwordElement.value, 6);
  // Sau khi kiểm tra dữ liệu xong thì gửi dữ liệu lên localStorage
  const userInfor = {
    userName: userNameElement.value,
    email: emailElement.value,
    password: passwordElement.value,
  };

  users.push(userInfor);

  localStorage.setItem("users", JSON.stringify(users));
  // Gọi API để register, nếu thành công thì thông báo thành công:
  alert("Đăng ký tài khoản thành công!");
}
