
import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Product from '../product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [breakTime,setBreackTime] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    } 
    const handleBreakBtn = (breakTime) =>{
        const newBreakTime = [...breakTime, products];
        setBreackTime(newBreakTime);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=> <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    handleBreakBtn = {handleBreakBtn}
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