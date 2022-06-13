import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store) => {
    const form = getElement(".input-form");
    const nameInput = getElement(".search-input");
    form.addEventListener("keyup", function (e) {
        const value = nameInput.value;
        if (!value) {
            display(store, getElement(".products-container"), true);
            return;
        }
        const newStore = store.filter((product) => {
            let { name } = product;
            name = name.toLowerCase();
            if (name.startsWith(value))
                return product;
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
