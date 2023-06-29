import React from "react";
import '../css/Collections.css';


function Collections(){
    return(
        <div className="collections">
           <h2 >Shop By Brand</h2>
           <div>
            <div className="collection-grid">
                <div className="collection-card">
                <img src={'https://seeklogo.com/images/H/hero-moto-corp-logo-1E20F7943A-seeklogo.com.png'}/>
               
                </div>

                <div className="collection-card">
                     <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/2000px-Honda_Logo.svg.png'}/>
               
                </div>
                

                <div className="collection-card">
                <img src={'https://logowik.com/content/uploads/images/royal-enfield6316.jpg'}/>
                </div>

                <div className="collection-card">
                     <img src={'https://1000logos.net/wp-content/uploads/2020/06/Bajaj-Logo.png'}/>
               
                </div>
            </div>
           </div>
        </div>
    )
}

export default Collections