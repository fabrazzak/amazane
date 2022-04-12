import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './ViewCart.css'

const ViewCart = (props) => {
    const {removeProduct,product}=props;
    console.log(removeProduct);
    const {name,img,quantity,shipping,price}=product;
   
    return (
        <div className='view-cart'>
            <img src={img} alt="" />
            <div className='view-cart-details'>
                <div className='view-cart-details-info'>
                  <h2>{name}</h2>
                  <p>Price: ${price}</p>
                  <p>Quantity: {quantity}</p>
                  <p>Shipping Charge : ${shipping}</p>
                </div>
                <div className='view-cart-details-icon '>
                    <button onClick={()=>removeProduct(product)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>           
        </div>
    );
};

export default ViewCart;