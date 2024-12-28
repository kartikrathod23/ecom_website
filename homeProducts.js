import { addToCart } from "./addToCart.js";
import { filterClickHandler } from "./filterClick.js";
import { stockElementToggle } from "./stockElementToggle.js";

const productContainer= document.querySelector('.template_container')
const cont=document.querySelector(".product-cont")
const template = document.querySelector('.productTemplate')
const addCart = document.querySelector('.add-to-cart-btn');

export const showProductsData=(products)=>{
    if(!products){
        return false;
    }

    products.forEach((curProd)=>{
        const {category,description,id,image,name,price,stock}=curProd;

        const productClone=document.importNode(template.content,true);
        productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);
        productClone.querySelector('.type').textContent=category;
        productClone.querySelector('.product-img').src=image;
        productClone.querySelector('.product-name').textContent = name;
        productClone.querySelector('.product-description').textContent=description;
        productClone.querySelector('.product-price').textContent=`₹${price}`;   
        // productClone.querySelector('.actual-price').textContent=`₹${price*3}`.toFixed;
        productClone.querySelector('.stock').textContent=stock;

        productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
            stockElementToggle(event,id,stock);
        });

        productClone.querySelector('.add-to-cart-btn').addEventListener('click',(event)=>{
            addToCart(event,id,stock);
        })
        document.body.querySelector('.cartQuantity').addEventListener('click',()=>{
            window.location.href = 'cartProducts.html';
        })

        cont.append(productClone);
    })
}