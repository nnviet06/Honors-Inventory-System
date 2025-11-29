import {useState, useEffect} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {       
    const [query, setQuery] = useState<string>('');
    return (
        <div>
            <p> Search Bar Component </p>  
            <p> Query: {query}  </p>
        </div>
    );
}

export default SearchBar;