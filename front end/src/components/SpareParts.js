import React from "react";
import SearchCard from "./SearchCard";
import Collections from "./Collections";
import Header from "./Header";
import Footer from "./Footer";

function SpareParts(){
    return (
        <div>
            <Header/>
             <SearchCard/>
             <Collections/>
             <Footer/>
        </div>
    )
}

export default SpareParts