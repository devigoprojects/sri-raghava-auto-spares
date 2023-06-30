import React from "react";
import "../css/Header.css";
import { BsCart2 } from 'react-icons/bs';
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className="Header">
         <div className="title">
         <Link to="/"><img className="logo" src={require('../assets/logo.png')} alt="sri raghava"/></Link>
         </div>
         <Link to="/cart">
            <div className="cart-icon">
            <BsCart2 size={24} color="#0D5C63"/>
            </div>
         </Link>
        </div>
    )
}

export default Header;