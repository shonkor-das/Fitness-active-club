
import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Product from '../product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>{

        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    } 


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=> <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
    
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;