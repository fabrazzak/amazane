import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = ({products,handelAddToCart}) => {
    const {id,name,price,img,seller,ratings}=products;
 
    
            
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3 className='product-name'>{name}</h3>
            <h4 className='product-price'>Price : {price}</h4>
            <h4 className='product-seller'>Manufacturer : {seller}</h4>
            <h4 className='product-rating'>Rating : {ratings}</h4>
            </div>
            <button onClick={()=>handelAddToCart(products)} className='btn-cart' >Add to cart 
           <span className='cart-icon'> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Products;