import { formatPrice, getElement, singleProductUrl } from "../utils.js";

// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
import { addToCart } from "../cart/setupCart.js";

// selections
const loading = getElement(".page-loading") as HTMLElement;
const centerDOM = getElement(".single-product-center") as HTMLElement;
const pageTitleDOM = getElement(".page-hero-title") as HTMLElement;
const imgDOM = getElement(".single-product-img") as HTMLImageElement;
const titleDOM = getElement(".single-product-title") as HTMLElement;
const companyDOM = getElement(".single-product-company") as HTMLElement;
const priceDOM = getElement(".single-product-price") as HTMLElement;
const colorsDOM = getElement(".single-product-colors") as HTMLElement;
const descDOM = getElement(".single-product-desc") as HTMLElement;
const cartBtn = getElement(".addToCartBtn") as HTMLElement;

// cart product
let productID: string;

// show product when page loads
window.addEventListener("DOMContentLoaded", async function (e: Event) {
  const urlID = window.location.search;
  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();
    const {
      id,
      fields: { name, company, price, colors, description, image: img },
    } = data;

    const image = img[0].thumbnails.large.url;

    /* setting html */
    productID = id;
    document.title = `${name.toUpperCase()} | Comfy`;
    pageTitleDOM.textContent = `Home / ${name}`;
    imgDOM.src = image;
    titleDOM.textContent = name;
    companyDOM.textContent = `by ${company}`;
    priceDOM.textContent = formatPrice(price);
    descDOM.textContent = description;
    colors.forEach((color: string) => {
      const span = document.createElement("span");
      span.classList.add("product-color");
      span.style.background = `${color}`;
      colorsDOM.appendChild(span);
    });
  } catch (err: any) {
    centerDOM.innerHTML = `<div><h3 class="error">sorry, something went wrong</h3>
    <a href="index.html" class="btn">back home</a></div>`;
  }
  loading.style.display = "none";
});

cartBtn.addEventListener("click", function () {
  addToCart(productID);
});
