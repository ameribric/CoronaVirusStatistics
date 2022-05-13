import React, {useState} from "react";

function NewCountryForm({ onAddCountry, newItem }) {

  const [country, setCountry] = useState("")
  const [confirmedCases, setConfirmedCases] = useState("")
  const [deaths, setDeaths] = useState("")
  const [population, setPopulation] = useState("")
  const [lifexpectancy, setLife] = useState("")



 



  function handleSubmit(e) {
    e.preventDefault();


      const newitem= {
        "country": country,
          "confirmedCases": confirmedCases,
        "deaths": deaths,
          "population": population,
          "life_expectancy": lifexpectancy
      }
    

    
  



 
      
    
    console.log()
    fetch("http://localhost:3001/countries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
       newitem
      )
     })
      .then((r) => {
      return  r.json()
     

      })
      .then((newCountry) => {   setCountry("")
      setConfirmedCases("")
      setDeaths("")
      setPopulation("")
      setLife("")
      onAddCountry(newCountry)
      console.log(newCountry)})
     
  }

  
  return (
    <div className="new-country-form">
      <h2>New Country</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          country="country"
          placeholder="Country name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="number"
          name="confirmedCases"
          placeholder="Confirmed COVID-19 Cases"
          value={confirmedCases}
          onChange={(e) => setConfirmedCases(parseFloat(e.target.value))}
        />
         <input
          type="number"
          name="deaths"
          placeholder="Confirmed COVID-19 Deaths"
          value={deaths}
          onChange={(e) => setDeaths(parseFloat(e.target.value))}
        />
        <input
          type="number"
          name="population"
          placeholder="Country total population"
          value={population}
          onChange={(e) => setPopulation(parseFloat(e.target.value))}
        />
       <input
          type="number"
          name="lifeexpectancy"
          placeholder="lifeexpectancy"
          value={lifexpectancy}
          onChange={(e) => setLife(parseFloat(e.target.value))}
        />
        <button type="submit">Add Country</button>
      </form>
    </div>
  );
}

export default NewCountryForm;