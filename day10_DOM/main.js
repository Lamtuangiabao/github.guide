const myDocument = {
  html: {
    head: {
      title: {
        content: "Document",
      },
      meta: {
        charset: "utf-8",
      },
      link: {
        rel: "stylesheet",
        href: "./style.css",
      },
    },
    body: {
      h1: {
        style: {
          backgroundColor: "red",
          color: "blue",
        },
        content: "Hello everyone!",
      },
    },
  },
};

console.log(myDocument);

/**
 * 1. DOM là cái gì? - Document Object Model
 * 2. Thành phần: 3 thành phần (nodes) chính: Element, Attribute, Text
 * 3. Thao tác với DOM:
 * - Thao tác với Element:
 * + getElementById: -> 1 element
 * + getElementsByTagName: -> 1 HMTL Collection
 * + getElementsByClassName: -> 1 HTML Collection
 * + querySelector -> 1 element
 * + querySelectorAll: -> 1 NodeList
 * - Thao tác với Attributes
 * 4. Xử lý sự kiện
 */

const h1Element = document.getElementById("welcome");
// const h1Element = document.getElementsByClassName("xinChao");
// const h1Element = document.getElementsByTagName("h1");
// const h1Element = document.querySelector("h1#welcome.xinChao");
const imgElement = document.querySelector("div.box > div.box-item > img");
// console.log({ h1Element });
console.log(imgElement);

const imgElements = document.querySelectorAll("div.box > div.box-item");
console.log(imgElements);

const h2Element = document.createElement("h2");
// h2Element.innerText = "Hom nay la buoi hoc so 10";

const bodyElement = document.getElementsByTagName("body")[0];
console.log(bodyElement);
bodyElement.appendChild(h2Element);

const box2Element = document.getElementsByClassName("box2")[0];

box2Element.innerHTML = `
<div class="box-item">suon xao chua ngot</div>
<div class="box-item">Ga ham</div>
<div class="box-item">Thit nuong</div>
<div class="box-item">Beer</div>
`;

bodyElement.appendChild(box2Element);
bodyElement.removeChild(box2Element);

h1Element.style.color = "red";

const imgXElement = document.querySelector("body > img");
imgXElement.classList.add("girl");
// ! Về nhà thử remove, toggle

console.log(imgXElement.getAttribute("src"));
imgXElement.setAttribute(
  "src",
  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIh8Sh6W7KsPROVqVP9UG_08IEMqzR5ei_ENSDpY4Tfe-4HSMdMgJRzSHfvrRMtbVjdkOepx7vkPS_NKlddLLrAJXNxEJ3W28IB5Ur1BunufyYPoAu_-6k5CI&usqp=CAc"
);
// imgXElement.src =
//   "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIh8Sh6W7KsPROVqVP9UG_08IEMqzR5ei_ENSDpY4Tfe-4HSMdMgJRzSHfvrRMtbVjdkOepx7vkPS_NKlddLLrAJXNxEJ3W28IB5Ur1BunufyYPoAu_-6k5CI&usqp=CAc";
