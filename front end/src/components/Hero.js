import React from "react";
import '../css/Hero.css';
import { CiSearch } from 'react-icons/ci';


function Hero(){
    return (
        <div className="Hero">
             <input placeholder="Seach..."/>
             <span className="search-icon"><CiSearch size={24} color="black"/></span>
             <img alt="" src="https://www.toyotazambia.co.zm/wp-content/uploads/2023/02/special-spare-parts-offer-890-600px-1.png"/>
        </div>
    )
}

export default Hero