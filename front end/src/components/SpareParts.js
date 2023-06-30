import React from "react";
import SearchCard from "./SearchCard";
import Collections from "./Collections";
import Header from "./Header";
import Footer from "./Footer";
import Layout from "./Layout";

function SpareParts(){
    return (
        <div>
           <Layout>
           <SearchCard/>
             <Collections/>
           </Layout>
        </div>
    )
}

export default SpareParts