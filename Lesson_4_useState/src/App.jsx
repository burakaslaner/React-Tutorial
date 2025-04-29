import { use, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstname] = useState('Burak');
  const [lastName, setLastName] = useState('Aslaner');

  const handleChange = () => {
    debugger;
    setFirstname("Can");
  }

  return (
    <div>
      <div>{firstName}</div>
      <div><button onClick={handleChange}>İsmi Değiştir</button></div>
    </div>

  )
}

export default App
