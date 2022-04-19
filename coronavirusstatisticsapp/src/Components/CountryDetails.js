const CountryDetails = ({detail , name}) =>{
    let {confirmed,deaths,population,location,recovered}=detail
    
    
    return(
        <div>
            
                <h2>country name:{name}</h2>
                <h2>confirmed cases:{confirmed}</h2>
                <h2>recoverd:{recovered}</h2>
                <h2>death:{deaths}</h2>
                <h2>population:{population}</h2>
                <h2>location:{location}</h2>

                

            
        </div>
    )
}
export default CountryDetails