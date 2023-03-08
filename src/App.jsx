import './App.css'
import Card from './components/Card'
import Logo from './components/Logo'
import Search from './components/Search'
import DarkModeButton from './components/DarkModeButton'

function App() {


  return (
    <div className="App">
      <Logo/>
      <DarkModeButton/>
      <Search/>
      <Card/>
    </div>
  )
}

export default App
