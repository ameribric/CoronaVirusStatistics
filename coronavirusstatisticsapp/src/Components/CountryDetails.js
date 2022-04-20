import React from "react"

const CountryDetails = ({details,visible,setVisible,setSelectCountry}) =>{
const{confirmed,deaths,capital_city,location,population,recovered}=details
 
    
    
    return(
        <div  style={{display: visible ? "block" : "none"}} className="details">
              <button className="button" onClick={()=>{setVisible(false)}}>[x]</button>
              <h4>population : {population}</h4>
              <h4>capital_city : {capital_city}</h4>
              <h4>location : {location}</h4>
              <h4>deaths : {deaths}</h4>
              <h4>confirmed : {confirmed}</h4>
              <h4>recovered : {recovered}</h4>
          
        </div>
    )
}
export default CountryDetails



