
import CountryDetails from "./CountryDetails";
import React, { useEffect } from "react";



const Corona = () =>{
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const request = async () => {
        let req = await fetch('https://covid-api.mmediagroup.fr/v1/cases')
        let res = await req.json()
        console.log(res)
        return res
      }
      useEffect(request, [])
    return(
        <div>
            <h1>Corona Virus Statistics</h1>
            <CountryDetails/>

            
        </div>
    )
}
export default Corona