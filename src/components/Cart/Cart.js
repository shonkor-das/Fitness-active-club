
import logo from '../../images/Shonkor Das.jpg'
import React from 'react';
import './Cart.css';
import Person from '../Person/Person';
import Break from '../Break/Break';

const Cart = (props) => {
    const {cart} = props;
  const {text} = props
    let total = 0;
    for(const product of cart){
        total = total + product.time;
    }
    return (
        <div className='cart'>
           <div className='cart-info'>
                <div className='cart-img'>
                   <img src={logo} alt=""/>
                </div>
                <div className='name'>
                    <h3>Shonkor Das</h3>
                    <p><small>Chittagong,Bangladesh</small></p>
                </div>
           </div>
            <div className='order-info'>
                <Person></Person>
                <Break></Break>
                <h4>Exercise Details</h4>
                <p className='Grand-total'>Exercise time : <small>{total} seconds</small></p>
                <p className='Grand-total'>Break time : {text}</p>

            </div>
            <button className='btn Activity-btn'>
                <p className='btn-text'>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart;