import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay") as HTMLDivElement;
const closeCartBtn = getElement(".cart-close") as HTMLButtonElement;
const toggleCartBtn = getElement(".toggle-cart") as HTMLButtonElement;

toggleCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});

export const openCart = () => {
  cartOverlay.classList.add("show");
};
