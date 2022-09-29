
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {name, img, age, time} = product;

    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='age'>For Age: {age}</p>
                <p>Time required : {time}s</p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to list</p>
            </button>
        </div>
    );
};

export default Product;