import React from "react";
import ListofCountries from './ListofCountries';

function CountryRender ({countries}){

    console.log(countries)
   
    const countryItems = countries.map((country) => {
        return <ListofCountries  key={country.country} country={country.country} confimred={country.confimredCases} deaths={country.deaths} 
                 population ={country.population} life_expectancy = {country.life_expectancy}/>
    })

  return (
<div className="allCountries"> 
    {
    countryItems
    }
 </div>
   )
}

export default CountryRender
