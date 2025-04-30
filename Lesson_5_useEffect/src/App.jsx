import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')


  useEffect(() => {
    console.log("her zaman çalışır")
  })

  useEffect(() => {
    console.log("component ilk render edildiğinde çalışır")
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve FIRSTNAME veya LASTNAME state değerlerinde değişiklik olduğunda çalışır")
  }, [firstName, lastName])

  //useEffect(() => {
  //  console.log("ilk render edildiğinde ve LASTNAME state değeri değiştiğinde çalışır")
  //}, [lastName])


  return (
    <div>
      <div><button onClick={() => setFirstName("Burak")}>Adı Değiştir</button></div>
      <div><button onClick={() => setlastName("Aslaner")}>Soyadı Değiştir</button></div>

    </div>


  )
}

export default App
