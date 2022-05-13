
import React, {useState, useEffect } from "react";
import ListofCountries from './ListofCountries';
import Search from './Search'
import NewCountryForm from "./NewCountryForm"
import CountryRender from "./CountryRender"
import {Switch, Route} from "react-router-dom"
import Navbar from "./NavBar"



const Corona = () =>{
    const [countries,setCountries]=useState([])
    const [allCountry,setAllcountry]=useState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const request = async () => {
    //     let req = await fetch('https://covid-api.mmediagroup.fr/v1/cases/Afghanistan')
    //     let res = await req.json()
    //     let countriesArray = []
    //     for (const country in res) {
    //       console.log(res[country])
    //       countriesArray.push({...res[country], name: country})
    //     }
    //     setCountries(countriesArray)
    //     setAllcountry(countriesArray)
    //   }
    //   useEffect(request, [])

    //   function handleAddCountry(newCountry) {
    //     const updatedCountryArray = [...countries, newCountry];
    //     setCountries(updatedCountryArray);
    //   }

    const [page, setPage] = useState("/")

useEffect(() => {
  fetch("http://localhost:3001/countries")
  .then(res => res.json())
  .then(data => setCountries(data))
},[]) 
     
function onAddCountry(element){
  console.log("onAddCountry",element)
  const countriesNew= [...countries, element ]
  setCountries(countriesNew)

}

      // map (another component) split
    return(
        <div  className="container">
            <div className="header1">
            <h1 > Corona Virus Statistics</h1>
            <h2 >List of countries</h2>

       <Navbar onChange={setPage}/>
       <Switch>
         <Route path = {"/NewCountry"}>
           <NewCountryForm onAddCountry ={onAddCountry}/>
         </Route> 
         <Route path = {"/Search"}>
            <Search countries={countries} setCountries={setCountries} allCountry={allCountry}/>
         </Route> 
         <Route path = "/CountryRender">
          <CountryRender countries= {countries}/>  
         </Route> 
       </Switch>

           
            
           
            </div>
        </div>
    )
}
export default Corona