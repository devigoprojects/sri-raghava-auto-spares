import React from "react";
import {ImWhatsapp} from "react-icons/im";
import "../css/Whatsapp_cta.css";

function WhatsAppCTA(){
    return(
        
        <div className="whatsapp-cta">
             <a href="https://api.whatsapp.com/send?phone=919848397654">
            <ImWhatsapp size={34} color="white"/>
            </a>
        </div>
    )
}

export default WhatsAppCTA