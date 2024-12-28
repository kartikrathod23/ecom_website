import { cartBill } from "./cartBill.js";
import { cartQuantityToggle } from "./cartQuantityToggle.js";
import { getCartProductsLS } from "./getCartProductsLS.js";
import { removeCartElement } from "./removeCartElement.js";
import { stockElementToggle } from "./stockElementToggle.js";


export const showCartProducts = (products) => {
    const arrProducts = Object.values(products);
    
    const cartProductContainer = document.querySelector('#cartProductContainer')
    const cartTemplate = document.querySelector(".cartTemplate");
    
    let productDataLS = getCartProductsLS();
    // productDataLS= JSON.parse(productDataLS);
    cartBill(productDataLS);


    productDataLS.forEach((curProd) => {
        const { id, price, quantity } = curProd;
        const cartClone = document.importNode(cartTemplate.content, true);

        let currentProduct = arrProducts.find((curEle) => {
            return curEle.id === id;
        })
        let stock = currentProduct.stock;
        cartClone.querySelector('.productCard').setAttribute("id", `card${id}`);
        cartClone.querySelector('.cartProduct-category').innerText = currentProduct.category;
        cartClone.querySelector('.productImg').src = currentProduct.image;
        cartClone.querySelector('.product-name').innerText = currentProduct.name;
        cartClone.querySelector('.cartProduct-price').innerText = `₹${price}`;
        cartClone.querySelector('.product-quantity').innerText = quantity;

        let actualPrice = currentProduct.price;

        cartClone.querySelector('.ProductQuantityElement').addEventListener('click', (event) => {
            cartQuantityToggle(event, id,actualPrice,stock);
        });

        cartClone.querySelector('.remove-btn').addEventListener('click', (event) => {
            removeCartElement(event, id);
        })

        cartProductContainer.append(cartClone)
    })

}