import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store: any) => {
  let companies = [
    "all",
    ...new Set(
      store.map((product: any) => {
        return product.company;
      })
    ),
  ];
  const companiesDOM = getElement(".companies") as HTMLElement;
  companiesDOM.innerHTML = (companies as string[])
    .map((company: string) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");
  companiesDOM.addEventListener("click", function (e: Event) {
    const element = e.target as HTMLElement;
    if (element.classList.contains("company-btn")) {
      let newStore: any = [];
      if (element.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter((product: any) => {
          return product.company === element.textContent;
        });
      }
      display(newStore, getElement(".products-container"), true);
    }
  });
};

export default setupCompanies;
