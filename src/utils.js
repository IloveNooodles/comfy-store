"use strict";
//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStorageItem = exports.getStorageItem = exports.formatPrice = exports.getElement = exports.singleProductUrl = exports.allProductsUrl = void 0;
const allProductsUrl = 'https://course-api.com/javascript-store-products';
exports.allProductsUrl = allProductsUrl;
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl = 'https://course-api.com/javascript-store-single-product';
exports.singleProductUrl = singleProductUrl;
const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element)
        return element;
    throw new Error(`Please check "${selection}" selector, no such element exist`);
};
exports.getElement = getElement;
const formatPrice = () => { };
exports.formatPrice = formatPrice;
const getStorageItem = () => { };
exports.getStorageItem = getStorageItem;
const setStorageItem = () => { };
exports.setStorageItem = setStorageItem;
