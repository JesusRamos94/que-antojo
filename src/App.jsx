import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListComponent } from './components/ItemListContainer/ItemListComponent'

function App() {


  return (
    <>
    <NavBar/>
    <ItemListComponent text="Pagina en contrucción 🧱"/>
    </>
  )
}

export default App
