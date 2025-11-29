import {useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {    
    // Two main components: Search button and Filter button
    const [query, setQuery] = useState<string>('');
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

    return (
        <div className={styles.searchBar}>  
            <input
                className={styles.searchInput}
                type="text" 
                placeholder=" Search for items..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} />    {/* Setting up userState for Search button component*/}
            <button className={styles.searchButton}> Search </button>  

            <div className={styles.filterContainer}>
            <button className={styles.filterButton} onClick={toggleFilter}> 
                Filter 
            </button>
            {isFilterOpen && (
                <div className={styles.filterDropdown}>
                    <p>Filter options</p>   {/* Setting up userState for Filter button component*/}
                </div>
            )}
        </div>
        </div>
    );
    
}

export default SearchBar;