import React from "react";
import Layout from "../Layout";
import "./styles/EngineOils.css";
import { useSelector } from "react-redux";




function EngineOils(){
    const products = useSelector((state)=>state);
    console.log(products)
    return( <Layout> 
    
   
        <div className="engine-oils">
         <div className="product-card">
            <div className="ribbon ribbon-red">SAVE<br/>10%</div>
            <img src={''} />
            <p className="product-name">{''}</p>
            <span>
                <p className="mrp-price">2,150</p>
                <p className="selling-price">1,720</p>
            </span>
            <div className="add-to-cart-btn">Add To Cart</div>
         </div>
        
        </div>
    
        </Layout>
    )
}

export default EngineOils