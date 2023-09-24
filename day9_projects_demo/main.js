import datas from "./datas.js";

// TODO: BTVN Nhóm 5
/**
 * 1. In ra mảng các sản phẩm có giá >=200
 * 2. In ra mảng các sản phẩm có tên chứa từ "Váy"
 * 3. In ra mảng products với giá tăng dần
 */

// B2: Giải phương trình bậc 2
// ax^2 + bx + c = 0

function giaiPhuongTrinhBac2(a, b, c) {
  // B1: Kiểm tra tham số a !== 0 && typeof a,b,c === "number"
  // B2: Nếu a == 0 và b ==0 và c != 0 => Vô nghiệm
  // B3: Nếu a == 0 , b != 0 thì tính luôn x = -c/b
  // B4: Tính $delta = b*b - 4*a*c
  // B5: Kiểm tra $delta.
  // ...
  // return ??
}

// B3: Xây dựng 1 hàm mà có thể kiểm tra được dữ liệu đầu vào của người dùng với yêu cầu sau:
function Validation(email) {
  // Kiểm tra email của người dùng
  // 1. Kiểm tra có đúng định dạng email hay không (kiểm tra xem có ký tự "@")
  // 2. Kiểm tra xem email này đã có trong hệ thống hay chưa, biết trong hệ thống có email là "hoangnm.bg@gmail.com" -> "Email đã được đăng ký"
  // 3. Kiểm tra email ko được để trống (email != null, undefined)
}
