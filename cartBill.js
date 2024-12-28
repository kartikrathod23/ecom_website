export const cartBill=(arrCartProductsLS)=>{
    let sum = 0;
    arrCartProductsLS.forEach((curProd)=>{
        sum+=curProd.price;
    })
    document.body.querySelector('.productSubTotal').innerText = `₹${sum}`;
    document.body.querySelector('.productFinalTotal').innerText= `₹${sum+50}`
}