// header 

import React from "react";
import {Link} from "react-router-dom"




function NavBar(){
    return(
        <nav>
            <Link to="/NewCountry">NewCountry</Link>
            <Link to="/Search">Search</Link>
            <Link to="/CountryRender">CountryRender</Link>
        </nav>


    )


}


export default NavBar