export const stockElementToggle=(event,id,stock)=>{
    const curCardElement = document.querySelector(`#card${id}`);
    
    const productQuantity = curCardElement.querySelector('.product-quantity');

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if(event.target.className ==="cartIncrement"){
        if(quantity<stock){
            quantity+= 1;
        }
        else if(quantity===stock){
            quantity=stock;
        }
    }
    if(event.target.className ==="cartDecrement"){
        if(quantity>1){
            quantity-=1;
        }
        else if(quantity===1){
            quantity=1;
        }
    }

    productQuantity.innerText=quantity;

    productQuantity.setAttribute("data-quantity",quantity.toString());
    return quantity;
}