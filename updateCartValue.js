let cartValue = document.querySelector('.cartQuantity');
export const updateCartValue=(cartProducts)=>{
    return (cartValue.innerText = cartProducts.length);
};