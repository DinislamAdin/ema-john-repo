import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handelAddToCart =props.handelAddToCart;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>seller: {seller}</p>
                <p>rating: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={() => handelAddToCart(props.product)}>shop now <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;