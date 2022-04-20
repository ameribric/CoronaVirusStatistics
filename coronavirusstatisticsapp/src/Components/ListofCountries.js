import React from "react";




const ListofCountries = ({details,name})=>{
    const [visible,setVisible]=useState(false)
    
   
   
    return(
        <div className="list">
            <ul>
               

            {visible?(
                <li onClick={()=>{

                    setVisible(!visible)} }> {name}</li>
                
                ) :(
                    <li onClick={()=>setVisible(!visible)}> {name}</li>
                    
                    )} 
                   
                   <CountryDetails visible={visible} setVisible={setVisible}   details={details} setSelectCountry={setSelectCountry}/>
                    </ul>
                    
        </div>
    )
}

export default ListofCountries