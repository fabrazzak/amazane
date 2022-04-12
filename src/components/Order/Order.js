import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../useProducts/useProducts';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Header/Cart';
import ViewCart from '../ViewCart/ViewCart';
const Order = () => {
  const [products,setProducts]=useProducts();
  
  const [cart,setCart]=useState([]);
    
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
  const removeProduct=product=>{

   const rest = cart.filter(pd => pd.id!=product.id)
       setCart(rest);
       removeFromDb(product.id);
      console.log('click remove' );
  }

    return (
      
        <div className=' shopping-cart'>
        <div className='view-product'>
       {
           cart.map(product => <ViewCart product={product} key={product.id} removeProduct={removeProduct}></ViewCart>)
       }

        </div>
        <div className='summary'>
            <div className='order-summary'>
                <Cart cart={cart}  ></Cart>
                    <Link to='/shipment'><button type='button' className='order-procced'>Shipment </button></Link>
            </div>
        
        </div>
        
    </div>

    );
};

export default Order;