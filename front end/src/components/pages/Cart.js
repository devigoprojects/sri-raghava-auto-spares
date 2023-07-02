import React from "react";
import "./styles/Cart.css";
import {IoMdArrowBack} from 'react-icons/io';
import { Link } from "react-router-dom";
import { QuantityPicker } from "react-qty-picker";

function Cart(){
    return(
         <div className="cart">
           <div className="cart-header">
           <Link to="/"><div className="icon">
           <IoMdArrowBack size="20px"/></div></Link>
            <h2>SHOPPING CART</h2>
           </div>
            <div className="cart-list">
                <img src="https://ms-spares.in/wp-content/uploads/2022/02/fd362513-9079-4557-8879-5aa21a493c9f-1-600x554.jpg" alt="img"/>
                <div className="details">
                <p>Accelerator Cable-First Quality - Avenger Street 180</p>
                <span className="cart-price">
                    <p>PRICE</p>
                    <p className="amount">199</p>
                </span>
                <span className="cart-quantity">
                    <p>QUANTITY</p>
               <QuantityPicker min={1} width="1.8em"/>
                </span>
                <span className="cart-subprice">
                    <p>SUB TOTAL</p>
                    <p className="amount">199</p>
                </span>
                </div>
            </div>

            <div className="cart-list">
                <img src="https://ms-spares.in/wp-content/uploads/2022/02/fd362513-9079-4557-8879-5aa21a493c9f-1-600x554.jpg" alt="img"/>
                <div className="details">
                <p>Accelerator Cable-First Quality - Avenger Street 180</p>
                <span className="cart-price">
                    <p>PRICE</p>
                    <p className="amount">199</p>
                </span>
                <span className="cart-quantity">
                    <p>QUANTITY</p>
               <QuantityPicker min={1} width="1.8em"/>
                </span>
                <span className="cart-subprice">
                    <p>SUB TOTAL</p>
                    <p className="amount">199</p>
                </span>
                </div>
            </div>

            <div className="cart-total">
                <h2>CART TOTAL</h2>
                <span>
                    <p>Sub Total</p>
                    <p>300</p>
                </span>
                <hr/>
                <span>
                    <p>9% GST</p>
                    <p>101</p>
                </span>
                <hr/>
                <span>
                    <p>Total</p>
                    <p>500</p>
                </span>
                <hr/>
                <div className="check-out-btn">
                    PROCEED TO CHECKOUT
                </div>
            </div>
        </div>
    )
}

export default Cart