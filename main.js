// import './testing.js'
// import { testing } from './testing.js';

import { showProductsData } from "./homeProducts.js";


console.log("helox`")
// fteching data from products.json

const mainFun=async()=>{
    const data=await fetch('./api/products.json')
    const product= await data.json();
    

    showProductsData(product);
    // console.log(product);

}
mainFun();