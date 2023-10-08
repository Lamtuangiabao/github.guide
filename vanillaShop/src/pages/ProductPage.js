import { products } from "../datas/datas";

export default function ProductPage() {
  return `<div>
  <h1>San pham ban chay</h1>
  ${products
    .map(
      (item) => `
  <h2>${item.name}</h2>
  <p>${item.desc}</p>
  <p>${item.price}</p>
  <button onclick="addToCart()">Thêm vào giỏ hàng</button>
  `
    )
    .join("")}
  </div>`;
}
