import Banner from "./src/components/Banner";
import ContactPage from "./src/pages/ContactPage";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import ProductPage from "./src/pages/ProductPage";
import "./style.css";

import Navigo from "navigo";

const mainContent = document.getElementById("main");
const bannerContent = document.getElementById("banner");

const router = new Navigo("/", { linksSelector: "a" });

const render = (target, content) => {
  target.innerHTML = content();
};

render(bannerContent, Banner);
router.on("/products", () => render(mainContent, ProductPage));
router.on("/home", () => render(mainContent, HomePage));
router.on("/", () => router.navigate("/home"));
router.on("/contact", () => render(mainContent, ContactPage));
router.on("/login", () => render(mainContent, LoginPage));
router.notFound(() => render(mainContent, NotFoundPage));
router.resolve();
