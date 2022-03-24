import { parse } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    let price=0;
    let shapping=0;
    let quantity=0;
    for (const product of cart){
        quantity=quantity + product.quantity;
        price=price + product.price * product.quantity;
        shapping= shapping +product.shipping ;
    }
    const tax= (price * 0.1).toFixed(2);
    const totalCost= price +shapping + parseFloat(tax);
     

   
    return (
        <div className='order-summary'>
             <h1 className='summary'>Order Summary</h1>
                <p className='summary'>Selected Items : {cart.length}</p>
                <p className='summary'> Price : ${price}</p>
                <p className='summary'>Total Shapping: ${shapping}</p>
                <p className='summary'>Tax : ${tax}</p>
                <h2 className='summary'>Total Price : ${totalCost}</h2>
        </div>
    );
};

export default Cart;