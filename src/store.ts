import { getStorageItem, setStorageItem } from "./utils.js";
let store: any = getStorageItem();
console.log(store);
const setupStore = (products: any) => {
  store = products.map((product: any) => {
    const {
      id,
      fields: { featured, price, name, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, price, name, company, colors, image };
  });
  setStorageItem("store", store);
};
const findProduct = () => {};
export { store, setupStore, findProduct };
