import React from "react";
import "../css/Services.css";
import {Link} from "react-router-dom";

function Types(){
    const scrollToTop = () => {
        window.scrollToTop(0,0);
    };
  
    return(
        <div className="types">
             <h1 className="heading">Our Services</h1>
           
           <div className="oils">
            <h1>Engine Oils</h1>
            <p>All kinds of bikes engine oils are available</p>
            <Link to="/oils"><div className="cta-button">Shop Now</div></Link>
           </div>

           <div className="spares">
           <h1>Spare Parts</h1>
           <p>All kinds of bikes spare parts are available</p>
           <Link to="/spares" onClick={scrollToTop}><div className="cta-button">Shop Now</div></Link>
           </div>

           <div className="tyres">
           <h1>Typres</h1>
           <p>All kinds of bikes typres  are available</p>
           <Link to="/typres"><div className="cta-button">Shop Now</div></Link>
           </div>
          
        </div>
    )
}

export default Types