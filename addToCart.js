
import { getCartProductsLS } from "./getCartProductsLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

    getCartProductsLS();

export const addToCart=(event,id,stock)=>{
    
    let arrCartProductsLS = getCartProductsLS();

    const curProd = document.querySelector(`#card${id}`);
    // console.log(curProd)
    let quantity = curProd.querySelector('.product-quantity').innerText;
    let price = curProd.querySelector('.product-price').innerText;

    price = price.replace("₹","");

    let existing = arrCartProductsLS.find((curProd)=>{
        return curProd.id === id;
    })
    if(existing ){
        quantity=Number(existing.quantity)+Number(quantity);
        price=parseFloat((price * quantity).toFixed(2));
        let updateCart = {id,price,quantity};

        updateCart = arrCartProductsLS.map((curProd)=>{
            return curProd.id === id ? updateCart : curProd;
        })

        localStorage.setItem("cartProductsLS",JSON.stringify(updateCart))

        showToast("add",id)

        return false;

    }
    price = Number((price * quantity).toFixed(2));
    quantity=Number(quantity)

    let curtIems = {id,price,quantity}
    arrCartProductsLS.push(curtIems);
    localStorage.setItem("cartProductsLS",JSON.stringify(arrCartProductsLS));

    updateCartValue (arrCartProductsLS);
    showToast("add",id);

    // console.log(quantity,price,totalPrice);
}