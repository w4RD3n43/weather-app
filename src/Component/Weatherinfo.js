import React, { useContext } from 'react'
import { AppContext } from '../context/appcontext'
import Spinner from './Spinner.js'
import Pastweatherinfo from './Pastweatherinfo.js'


const Weatherinfo = () => {

  const {loading,input,min_temp,temp,max_temp} = useContext(AppContext)

  return (
      <div className='container'>
      
      {
        loading ? (<Spinner/>) : (
          <div className='information-container'>
            <div className='City-information'>
              <div className='location'>
              <h1 className='city'>
                {input}
              </h1>
              <p className='temp'>
              {temp} &deg;C
              </p>
              <p>
                Minimum Temperature :  {min_temp} &deg;C
              </p>
              <p>
                Maximum Temperature :  {max_temp} &deg;C
              </p>
              </div> 
            </div>
            <Pastweatherinfo/>
          </div>
        ) 
      }

    </div>
    
  )
}

export default Weatherinfo
