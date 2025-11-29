import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from '../Test'
import NavBar from './components/layout/NavBar'
import SearchBar from './components/layout/SearchBar'
import EquipTable from './components/layout/EquipTable'
import AddNew from './components/modals/AddNew'
import LocChange from './components/modals/LocChange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Test />
    </>
  )
}

export default App
