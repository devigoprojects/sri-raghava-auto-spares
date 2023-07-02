import React from "react";
import Layout from "../Layout";
import "./styles/EngineOils.css";


function EngineOils(){
    return (
        <Layout>
        <div className="engine-oils">
         <div className="product-card">
            <div className="ribbon ribbon-red">SAVE<br/>10%</div>
            <img src="https://www.euroliquids.co.in/EuroLiquidsImages/ProductImages/rowe-motor-oils-hightec-synt-rsv-sae-0w-20-euroliquids.png" />
            <p className="product-name">Rowe Hightec Synt RSV SAE 0W-20 Engine Oil</p>
            <span>
                <p className="mrp-price">2,150</p>
                <p className="selling-price">1,720</p>
            </span>
            <div className="add-to-cart-btn">Add To Cart</div>
         </div>

         <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/511BKb-0G6L._AC_UF1000,1000_QL80_.jpg" />
            <p className="product-name">Rowe Hightec Synt RSV SAE 0W-20 Engine Oil</p>
            <span>
                <p className="mrp-price">2,150</p>
                <p className="selling-price">1,720</p>
            </span>
            <div className="add-to-cart-btn">Add To Cart</div>
         </div>

         <div className="product-card">
         <div className="ribbon ribbon-green">SAVE<br/>20%</div>
            <img src="https://www.euroliquids.co.in/EuroLiquidsImages/ProductImages/rowe-motor-oils-hightec-synt-rsv-sae-0w-20-euroliquids.png" />
            <p className="product-name">Rowe Hightec Synt RSV SAE 0W-20 Engine Oil</p>
            <span>
                <p className="mrp-price">2,150</p>
                <p className="selling-price">1,720</p>
            </span>
            <div className="add-to-cart-btn">Add To Cart</div>
         </div>

         <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/511BKb-0G6L._AC_UF1000,1000_QL80_.jpg" />
            <p className="product-name">Rowe Hightec Synt RSV SAE 0W-20 Engine Oil</p>
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