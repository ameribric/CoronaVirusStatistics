
import React, {useState, useEffect } from "react";
import ListofCountries from './ListofCountries';
import Search from './Search'



const Corona = () =>{
    const [countries,setCountries]=useState([])
    const [allCountry,setAllcountry]=useState()
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
        setAllcountry(countriesArray)
      }
      useEffect(request, [])
    return(
        <div >
            
            <div className="header"><h1 > Corona Virus Statistics</h1></div>
            <h2>List of countries</h2>
            <div className="allCountries"> 
            <Search countries={countries} setCountries={setCountries} allCountry={allCountry}/>
            {countries.map((element) => {
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