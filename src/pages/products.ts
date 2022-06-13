// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { setupStore, store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";

import fetchProducts from "../fetchProducts.js";

const init = async () => {
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }

  const loading = getElement(".page-loading") as HTMLElement;
  display(store, getElement(".products-container"), false);
  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);

  loading.style.display = "none";
};

init();
