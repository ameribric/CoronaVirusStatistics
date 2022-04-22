
import React, {useState} from "react";




const ListofCountries = ({name, country })=>{
    
    const{confirmed,deaths,capital_city,location,population,recovered}=country
    const [visible,setVisible]=useState(false)
    return(
        <div className="country">
            <div>
            
            {visible?(
                <div  onClick={()=>{setVisible(!visible)}}> {name}</div>
                ) :(
                    <div onClick={()=>setVisible(!visible)}> {name}</div>
                )}
            
            </div>
        <div className="details" style={{display: visible ? "block" : "none"}} >
          <div >
              <button className="close-button" onClick={()=>{setVisible(false)}}>[x]</button>
              <div>
              <h4>population : {population}</h4>
              <h4>capital_city : {capital_city}</h4>
              <h4>location : {location}</h4>
              <h4>deaths : {deaths}</h4>
              <h4>confirmed : {confirmed}</h4>
              <h4>recovered : {recovered}</h4>
              </div>
              </div>
        </div>
                    
        </div>
    )
}

export default ListofCountries