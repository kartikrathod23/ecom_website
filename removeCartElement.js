import { cartBill } from "./cartBill.js";
import { getCartProductsLS } from "./getCartProductsLS.js"
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeCartElement=(event,id)=>{
    let cartProducts = getCartProductsLS();
    cartProducts = cartProducts.filter((curProd)=>curProd.id !== id);

    localStorage.setItem("cartProductsLS",JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();

        showToast("remove",id);
    }

    updateCartValue(cartProducts);
    cartBill(cartProducts); 
}