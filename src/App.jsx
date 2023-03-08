import './App.css'
import Card from './components/Card'
import Logo from './components/Logo'
import DarkModeButton from './components/DarkModeButton'
import { useState } from 'react'

function App() {
  
  return (
    <div className="App">
      <Logo/>
      <DarkModeButton/>
      <Card/>
    </div>
  )
}

export default App
