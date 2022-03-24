import React, { useEffect, useState } from 'react';
import{addToDb, getStored, getStoredCart} from '../../utilities/fakedb';
import Cart from './Cart';
import Products from './Products';
import './Shopping.css'

const Shopping = () => {

    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then( data => setProducts(data));
    },[])
       useEffect(()=>{
           const storedCart=getStoredCart();
           const saveCart=[];
           for (const id in storedCart){
              const addedProduct= products.find(product => product.id===id);
             if(addedProduct){
                 const quantity=storedCart[id];
                 addedProduct.quantity=quantity;
                 saveCart.push(addedProduct);
             }

           }
           setCart(saveCart);
       },[products])
    const handelAddToCart =(selectedProduct)=>{
        let newCart =[];
        const exists = cart.find(product =>  product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity=1;
            newCart= [...cart, selectedProduct];
        }
        else{

            const rest = cart.filter(product => product.id!==selectedProduct.id);
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists]

        }

        
        setCart(newCart);
      addToDb(selectedProduct.id);
    }
    return (
        <div className='shopping-cart'>
            <div className='products'>
              
               {
                products.map(product=>
                     <Products 
                     products={product}
                      key={product.id}
                      handelAddToCart={handelAddToCart}
                     
                      ></Products>)
               }
            </div>
            <div className='summary'>
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shopping;