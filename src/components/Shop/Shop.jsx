import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProduct] = useState([])

    const [cart, setCart] = useState([])
    // console.log(products)
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product ={product}
                        handelAddToCart ={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h6>this is cart</h6>
                <p>selected items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;