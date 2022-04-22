import React from "react";


function Search({countries,setCountries,allCountry}) {
  return (
    <div className="search">
      Search : <input
        type="text"
        placeholder="Enter Country Name"
        onChange={(e) =>{ 
            if(!e.target.value.toLocaleLowerCase()) return setCountries(allCountry);
            let search = countries.filter((element)=>{
                return element.name.toLocaleLowerCase()?.includes(e.target.value)
            })
            if (search.length>0) setCountries(search)
        }
        }
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;