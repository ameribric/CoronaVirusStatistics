import React, { useState } from 'react';

const Search =({country,CountryDetails})=>{
    const [searchQuery, setSearchQuery] = useState('')
const searchResults = country.filter((country) => {
    return country.name.toLowerCase().includes(searchQuery.toLowerCase())
});
const countryNames = searchResults.map((country) => {
    return <CountryDetails key={country} country={country} />
});
const handleOnChange = (event) => {
    setSearchQuery(event.target.value)
};
<input type="text" placeholder="Search..." onChange={handleOnChange} />

}


export default Search