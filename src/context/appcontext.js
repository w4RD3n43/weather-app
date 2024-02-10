import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
 
 function AppContextProvider({children}){
  
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(null);
  const [min_temp, setMintemp] = useState(0);
  const [max_temp, setMaxtemp] = useState(0);
  const [temp, settemp] = useState(0);

  async function fetchWeatherData(input) {
    setInput('Mumbai')
    console.log(input)
    const apiKey = 'a24f0bd86a429dd94ea5db5889d70959'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Failed to fetch weather data');
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      return null;
    }
    
  }
  
  useEffect(()=>{
    fetchWeatherData()
  },[])


  


  const changeHandler = (event) => {
    setInput(event.target.value)
  }
  const clickHandler = (event) => {
    
    fetchWeatherData(input)
  }

  const value = {
    input,
    changeHandler,
    clickHandler,
    loading,
    min_temp,
    setMintemp,
    setMaxtemp,
    settemp,
    max_temp,
    temp
  }

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
) 

 }




export { AppContext, AppContextProvider }