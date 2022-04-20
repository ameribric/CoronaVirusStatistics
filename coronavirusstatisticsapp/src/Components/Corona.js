
import CountryDetails from "./CountryDetails";
import React, {useState, useEffect } from "react";
import ListofCountries from './ListofCountries';
import Search from './Search'



const Corona = () =>{
    const [countries,setCountries]=useState([])
    
    const [selectCountry,setSelectCountry]=useState({})
    

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const request = async () => {
        let req = await fetch('https://covid-api.mmediagroup.fr/v1/cases')
        let res = await req.json()
        let countriesArray = []
        for (const country in res) {
          console.log(res[country])
          countriesArray.push({...res[country], name: country})
        }
        setCountries(countriesArray)
      
      }
      useEffect(request, [])
    return(
        <div >
            <h1>Corona Virus Statistics</h1>
            <h2>List of countries</h2>
            <div className="allCountries">
            {
              
              countries.map((element) => {
                
                  
                  return(
                      <div > 
                        <ListofCountries  country={element.All} name={element.name} />
                        {/* <CountryDetails visible={visible} setVisible={setVisible} details={selectCountry} setSelectCountry={setSelectCountry}/> */}
                        </div>
                  )
              })
              
            }
            </div>
        </div>
    )
}
export default Corona