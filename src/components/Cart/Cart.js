
import logo from '../../images/Shonkor Das.jpg'
import React from 'react';
import './Cart.css';
import Person from '../Person/Person';
import Break from '../Break/Break';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const product of cart){
        total = total + product.time;
    }

    const diffToast = () =>{
        toast('Congratulations your activity is done', {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'toast-message'
        });
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
                <p className='Grand-total'>Break time : </p>

            </div>
            <button className='btn Activity-btn' onClick={diffToast}>
                <p className='btn-text'>Activity Completed</p>
                <ToastContainer></ToastContainer>
            </button>
        </div>
    );
};

export default Cart;