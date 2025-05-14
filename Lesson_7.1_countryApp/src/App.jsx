import { useState } from 'react'
import './App.css'
import Header from './Header'
import { countries } from './data'
import Country from './Country'
import './css/Country.css';

function App() {

  return (
    <div>
      <Header />
      <div className='country-main'>
        {
          countries?.map((country) => (
            <Country key={countries.id} country={country} />
          ))
        }

      </div>


    </div>

  )
}

export default App
