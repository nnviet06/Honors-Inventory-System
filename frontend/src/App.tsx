import { useState } from 'react'
import styles from './App.module.css'
import Test from '../Test'
import NavBar from './components/layout/NavBar'
import SearchBar from './components/layout/SearchBar'
import EquipTable from './components/layout/EquipTable'
import AddNew from './components/modals/AddNew'
import LocChange from './components/modals/LocChange'

function App() {
    return (
        <div className={styles.app}>
            <NavBar />  
            <SearchBar />  
            <div className={styles.container}>
                <EquipTable /> 
            </div>
        </div>
    );
}

export default App
