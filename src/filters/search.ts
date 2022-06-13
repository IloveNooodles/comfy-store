import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store: any) => {
  const form = getElement(".input-form") as HTMLFormElement;
  const nameInput = getElement(".search-input") as HTMLInputElement;
  form.addEventListener("keyup", function (e: Event) {
    const value = nameInput.value;
    if (!value) {
      display(store, getElement(".products-container"), true);
      return;
    }

    const newStore = store.filter((product: any) => {
      let { name } = product;
      name = (name as string).toLowerCase();
      if ((name as string).startsWith(value)) return product;
    });
    if (newStore.length < 1) {
      const prodcuts = getElement(".products-container");
      prodcuts.innerHTML = `<h3 class="filter-error">sorry, no product match your search</h3>`;
      return;
    }
    display(newStore, getElement(".products-container"), true);
  });
};

export default setupSearch;
