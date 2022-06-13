import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store: any) => {
  const priceInput = getElement(".price-filter") as HTMLInputElement;
  const priceValue = getElement(".price-value") as HTMLParagraphElement;

  let maxPrice = store.map((product: any) => {
    return product.price;
  });

  maxPrice = Math.ceil(Math.max(...maxPrice) / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = "0";
  priceValue.textContent = `Value: $${maxPrice}`;
  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value: $${value}`;
    let newStore = store.filter((product: any) => {
      return product.price / 100 <= value;
    });
    if (newStore.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
      return;
    }
    display(newStore, getElement(".products-container"), true);
  });
};

export default setupPrice;
