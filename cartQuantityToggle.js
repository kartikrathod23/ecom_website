import { cartBill } from "./cartBill.js";
import { getCartProductsLS } from "./getCartProductsLS.js";

export const cartQuantityToggle=(event,id,actualPrice,stock)=>{
    let arrCartProductsLS = getCartProductsLS();
    let current = arrCartProductsLS.find((cur)=>{
        return cur.id===id;
    })
    let quantity=current.quantity;
    
    const curCard = document.querySelector(`#card${id}`);
    // console.log(curCard);
    let productQuantity = curCard.querySelector('.product-quantity'); 
    let productPrice = curCard.querySelector('.cartProduct-price');

    if(event.target.className==='cartIncrement'){
        if(quantity<stock){
            quantity+=1;
        }
        else if(quantity===stock){
            quantity=stock;
        }
    }
    if(event.target.className==='cartDecrement'){
        if(quantity>1){
            quantity-=1;
        }
    }

    let price = Number(actualPrice*quantity.toFixed(2));
    quantity= Number(quantity);

    productQuantity.innerText = quantity;
    productPrice.innerText = `₹${price}`;
    

    let updatedCart = {id,price,quantity};
    updatedCart = arrCartProductsLS.map((curProd)=>{
        return curProd.id === id ? updatedCart : curProd;
    })

    localStorage.setItem("cartProductsLS",JSON.stringify(updatedCart));

    cartBill(updatedCart);
}