import {useState, useEffect} from 'react';
import './NavBar.module.css';


const NavBar = () => {
    const [title, setTitle] = useState<string>('Inventory System');

    return (
        <nav>
            <h1>{title}</h1>
        </nav>
    );
};

export default NavBar;