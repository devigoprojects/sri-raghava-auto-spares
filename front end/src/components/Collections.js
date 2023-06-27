import React from "react";
import '../css/Collections.css';


function Collections(){
    return(
        <div className="collections">
           <div className="title">
           <img src="https://cdn.pixabay.com/photo/2016/10/18/20/16/motorcycle-1751290_960_720.png"/>
           <h2 >Collections</h2>
           <img src="https://cdn.pixabay.com/photo/2016/10/18/20/16/motorcycle-1751290_960_720.png"/>
           </div>
           <div>
            <div className="collection-grid">
                <div className="collection-card">
                <img src={'https://seeklogo.com/images/H/hero-moto-corp-logo-1E20F7943A-seeklogo.com.png'}/>
                <h2>Hero</h2>
                </div>

                <div className="collection-card">
                     <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/2000px-Honda_Logo.svg.png'}/>
                <h2>Honda</h2>
                </div>

                <div className="collection-card">
                <img src={'https://logowik.com/content/uploads/images/royal-enfield6316.jpg'}/>
                <h2>Royal Enfield</h2>
                </div>

                <div className="collection-card">
                     <img src={'https://1000logos.net/wp-content/uploads/2020/06/Bajaj-Logo.png'}/>
                <h2>Bajaj</h2>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Collections