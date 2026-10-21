import { useState } from 'react'
import './App.css'

function App() {
  const nama = "Sheva";
  const n = 3;
  const jam = 9;

  const style = {
    color: 'teal',
    fontSize: 30,
  }

  return (
    <>
    <h1 className='Title' style={{color: style.color, fontSize: style.fontSize}}>Kantin {nama}</h1>
    <p>{jam < 12 ? "Selmat pagi" : "Selamat siang"}</p>
    <p>Saldo awal kartu kantin: Rp {n * 1000}</p>
    <button disabled>Bayar</button>
    </>
  )
}

export default App
