import React from "react";
import "../css/Header.css";
import { BsCart2 } from 'react-icons/bs';
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className="Header">
         <div className="title">
         <img className="logo" src={require('../assets/logo.png')} alt="sri raghava"/> 
         </div>
         <Link to="/cart"><i class="fa-sharp fa-light fa-cart-shopping" ></i></Link>
         <span className="search-icon"><BsCart2 size={24} color="#0D5C63"/></span>
        </div>
    )
}

export default Header;