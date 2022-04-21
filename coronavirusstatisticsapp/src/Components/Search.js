import React from "react";


function Search({countries,setCountries,allCountry}) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder=""
        onChange={(e) =>{ 
            if(!e.target.value.toLocaleLowerCase()) return setCountries(allCountry);
            let search = countries.filter((element)=>{
                return element.name?.includes(e.target.value)
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