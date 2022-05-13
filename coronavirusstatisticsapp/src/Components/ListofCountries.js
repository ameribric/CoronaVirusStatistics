
import React, {useState} from "react";




const ListofCountries = ({ country, confirmedCases, deaths, population, life_expectancy})=>{
    //{
    // const{confirmed,deaths,capital_city}=country
    const [visible,setVisible]=useState(false)
    return(
        <div className="country">
            <div>
            
            {visible?(
                <div  onClick={()=>{setVisible(!visible)}}> {country}</div>
                ) :(
                    <div onClick={()=>setVisible(!visible)}> {country}</div>
                )}
            
            </div>
        <div className="details" style={{display: visible ? "block" : "none"}} >
          <div >
              <button className="close-button" onClick={()=>{setVisible(false)}}>[x]</button>
              <div>
            <h4>{country}</h4>
              <h4>population : {population}</h4>
              <h4>deaths : {deaths}</h4>
              <h4>confirmed : {confirmedCases}</h4>
              <h4> life_expectnacy : {life_expectancy}</h4>
              </div>
              </div>
        </div>
                    
        </div>
    )
}

export default ListofCountries