import React from "react";
import CountryDetails from "./CountryDetails";
import { useState } from "react";



const ListofCountries = ({name, visible, setVisible,setSelectCountry})=>{
    
    
   
    return(
        <div>
            <ul>

            {visible?(
                <li onClick={()=>{setVisible(!visible)} }> {name}</li>
                
                ) :(
                    <li onClick={()=>setVisible(!visible)}> {name}</li>
                    
                    )} 
    
                    </ul>
        </div>
    )
}

export default ListofCountries