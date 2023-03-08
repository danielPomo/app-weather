import './App.css'
import Card from './components/Card'
import Logo from './components/Logo'
import DarkModeButton from './components/DarkModeButton'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const switchMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={(darkMode) ? "App dark-app" : "App light-app"}>
      <Logo/>
      <DarkModeButton
      mode = { switchMode }
      />
      <Card
      isDark = { darkMode }
      />
    </div>
  )
}

export default App
