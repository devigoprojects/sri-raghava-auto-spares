import React from "react";
import "../css/SearchCard.css";

function SearchCard(){
    return(
        <div className="card">
            <h1>Find Parts For Your Vehicle</h1>
           
            <div className="drop-downs">
                {/* Brand */}
            <select className="dropdown" name="cars" id="cars">
            <option value="" disabled selected>Select Bike Brand</option>
            <option value="volvo">Honda</option>
            <option value="saab">Hero</option>
            <option value="mercedes">Royal Enfield</option>
            <option value="audi">Tvs</option>
            </select>

            {/* Bike */}

            <select className="dropdown" name="cars" id="cars">
            <option value="" disabled selected>Select Bike</option>
            <option value="volvo">Honda</option>
            <option value="saab">Hero</option>
            <option value="mercedes">Royal Enfield</option>
            <option value="audi">Tvs</option>
            </select>

             {/* Bike Model */}

             <select className="dropdown" name="cars" id="cars">
            <option value="" disabled selected>Select Bike Model</option>
            <option value="volvo">Honda</option>
            <option value="saab">Hero</option>
            <option value="mercedes">Royal Enfield</option>
            <option value="audi">Tvs</option>
            </select>
            </div>
            
            {/* Button */}
            <a href="/">
            <div className="search-button">
                <p>SEARCH PARTS</p>
            </div>
            </a>
          
        </div>
    )
}

export default SearchCard;