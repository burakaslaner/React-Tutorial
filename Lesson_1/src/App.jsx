import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Jsx : {}
  //Javascript kodları yazılır
  let a = 15;
  const firstName = "Burak";

  let vize1 = 20;
  let vize2 = 80;

  let sonuc = true;

  let isimler = [
    "Burak",
    "Eliza",
    "Esma",
    "Mustafa"
  ]
  return (
    //Html kodları yazılır
    <div>
      {/*<p>Ortalama : {(vize1 + vize2) / 2}</p>*/}

      {/*    {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyeti alamazsın, kayboldu</p>} */}

      {/*  {
        (vize1 + vize2) / 2 >= 50 ? <p>Dersten geçtin, aferin</p> : <p>Kaldın, üzgünüm</p>
      } */}

      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: '#748934',
            border: '1px solid black'
          }} key={index}>{isim}</div>
        ))
      }

    </div>

  )
}

export default App
