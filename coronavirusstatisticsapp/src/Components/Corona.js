
import CountryDetails from "./CountryDetails";
import React, {useState, useEffect } from "react";



const Corona = () =>{
    const [countries,setCountries]=useState([])

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const request = async () => {
        let req = await fetch('https://covid-api.mmediagroup.fr/v1/cases')
        let res = await req.json()
        let countriesArray = []
        for (const country in res) {
          console.log('COUNTRY', res[country])
          countriesArray.push(res[country])
        }
        setCountries(countriesArray)
        console.log(res)
      }
      useEffect(request, [])
    return(
        <div>
            <h1>Corona Virus Statistics</h1>
            
            {
              countries.map((element, i) => {
                  return(
                      <div key={i}>
                          <h4>{element.All.deaths} deaths</h4>
                          </div>
                  )
              })
            }
              
                
            
            

            
        </div>
    )
}
export default Corona