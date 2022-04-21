
import React, {useState} from "react";




const ListofCountries = ({name, country })=>{
    
    const{confirmed,deaths,capital_city,location,population,recovered}=country
    const [visible,setVisible]=useState(false)
    return(
        <div>
            <div>
            <ul>
            {visible?(
                <li onClick={()=>{setVisible(!visible)}}> {name}</li>
                ) :(
                    <li onClick={()=>setVisible(!visible)}> {name}</li>
                )}
            </ul>
            </div>
        <div  style={{display: visible ? "block" : "none"}} className="details">
          <div className="countryDetails">
              <button className="button" onClick={()=>{setVisible(false)}}>[x]</button>
              <h4>population : {population}</h4>
              <h4>capital_city : {capital_city}</h4>
              <h4>location : {location}</h4>
              <h4>deaths : {deaths}</h4>
              <h4>confirmed : {confirmed}</h4>
              <h4>recovered : {recovered}</h4>
              </div>
        </div>
                    
        </div>
    )
}

export default ListofCountries