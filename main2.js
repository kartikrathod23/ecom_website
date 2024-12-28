import { showCartProducts } from "./showCartProducts.js";

// const cartProductContainer=document.querySelector('#cartProductContainer')
// const cartTemplate = document.querySelector(".cartTemplate");


// let productDataLS = localStorage.getItem("cartProductsLS");
// productDataLS= JSON.parse(productDataLS);
// // console.log(productDataLS);

// productDataLS.forEach((curProd)=>{
//     const {id,price,quantity} = curProd;
//     const cartClone=document.importNode(cartTemplate.content,true);
//     // console.log(cartClone);

//     // const apiData = fetch('./api/products.json')
//     // const apiProduct = apiData.JSON()
//     // console.logg(apiProduct);

//     cartClone.querySelector('.productCard').setAttribute("id",`card${id}`);

//     cartClone.querySelector('.cartProduct-price').innerText = `₹${price}`;

//     cartProductContainer.append(cartClone)

// })

const mainFun=async()=>{
    const data=await fetch('./api/products.json')
    const product= await data.json();
    

    showCartProducts(product);
    // console.log(product);
}
mainFun();