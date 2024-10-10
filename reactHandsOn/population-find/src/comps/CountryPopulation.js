import React, {useState} from 'react';
import axios from 'axios';

const CountryPopulation = () => {

 const [countryName, setCountryName]=useState('');
 const [population, setPopulation] = useState(null); 
 const [loading, setLoading] = useState(false);
 const [error, setErrror] = useState(null);

//https://restcountries.com/v3.1/alpha/{code}

 const fetchPopulation = () =>{
     axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
     .then(response =>{
        const country = response.data[0];
        setPopulation(country.population);
        setLoading(false);
     })
     .catch(error => {
       setErrror(error);
     });
 } 

 const handleInputChange = (e) =>{
    setCountryName(e.target.value);
 }   

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetchPopulation();
  } 

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
            <label>Country :</label>
            <input type='text'
            placeholder='Enter the Country Name'
            onChange={handleInputChange}
            ></input>
            <button type="submit">Get Population</button>
        </form>
      </div>
      {loading && <p>Loading........</p>}
      {error && <p>Error: {error.message}</p>}
      {population !==null && <p> The Population of {countryName} : {population}</p>}
    </div>
  )
}
export default CountryPopulation
