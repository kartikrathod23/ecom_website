import { updateCartValue } from "./updateCartValue.js";

export const getCartProductsLS=()=>{
    let cartProducts=localStorage.getItem("cartProductsLS");
    if(!cartProducts){
        return [];
    }
    cartProducts=JSON.parse(cartProducts);
    updateCartValue(cartProducts);
    return cartProducts;

}