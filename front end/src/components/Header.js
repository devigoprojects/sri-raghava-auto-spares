import React from "react";
import "../css/Header.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Header(){
    return(
        <div className="Header">
         <MenuOutlinedIcon style={{fontSize: "1.8em"}}/>
         <div className="title">
         <img className="logo" src={require('../assets/om.png')} alt="om"/> 
         <h3>Sri Raghava</h3>
         <p>Auto Spares</p>
         </div>

         <ShoppingCartOutlinedIcon style={{fontSize: "1.8em"}}/>
        </div>
    )
}

export default Header;