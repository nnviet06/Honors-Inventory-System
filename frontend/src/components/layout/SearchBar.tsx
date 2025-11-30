import {useState} from 'react';
import styles from './SearchBar.module.css';
import AddNew from '../modals/AddNew';

const SearchBar = () => {    
    // Three main components: Search button, Filter button, and Add New button
    const [query, setQuery] = useState<string>('');
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [showAddNewModal, setShowAddNewModal] = useState<boolean>(false);

    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

    const handleAddNew = () => {
        setShowAddNewModal(true);
    };

    const handleCloseModal = () => {
        setShowAddNewModal(false);  
    };

    return (
        <>
        <div className={styles.searchBar}>  
            <input
                className={styles.searchInput}
                type="text" 
                placeholder=" Search items . . ." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} />    {/* Setting up userState for Search button component*/}
            <button className={styles.searchButton}> Search </button>  

            <div className={styles.filterContainer}>
            <button className={styles.filterButton} onClick={toggleFilter}>  {/* Setting up userState for Filter button component*/}
                Filter 
            </button>
            {isFilterOpen && (
                <div className={styles.filterDropdown}> 
                    <p>Filter options</p>   
                </div>
            )}
            </div>

            <button className={styles.addNewButton} onClick={handleAddNew} >   {/* Setting up Add New button component, no useState, later use in modals*/}
                + Add New 
            </button>
        </div>
        {showAddNewModal && (
            <AddNew onClose={handleCloseModal} />
        )}
        </>
        
    );
    
}

export default SearchBar;