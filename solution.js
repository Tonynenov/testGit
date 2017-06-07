'use strict';

function solve() {
    function getProduct(productType, name, price) {
        return {
            productType: productType,
            name: name,
            price: price
        };
    }

    function getShoppingCart() {}

    return {
        getProduct: getProduct,
        getShoppingCart: getShoppingCart
    };
}

module.exports = solve();