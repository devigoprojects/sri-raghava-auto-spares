import React from "react";
import Header from "./Header";
import  WhatsAppCTA from "./Whatsapp_cta";
import Footer from "./Footer";

const Layout = (props) => {
    const scrollToTop = () => {
        window.scrollToTop(0,0);
    };
    return(
    <> 
    <Header/>
    <main>{props.children}</main>
    <WhatsAppCTA/>
    <Footer/>
    </>
    )
}

export default Layout