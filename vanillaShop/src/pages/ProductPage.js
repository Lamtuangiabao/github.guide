const products = [
  { id: "1", name: "Iphone 15", desc: "Mo ta san pham", price: 3000 },
  { id: "2", name: "Macbook", desc: "Mo ta san pham", price: 3000 },
  { id: "3", name: "Củ sạc", desc: "Mo ta san pham", price: 3000 },
];

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
