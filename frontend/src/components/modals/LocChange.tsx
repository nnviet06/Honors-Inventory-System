import {useState, useEffect} from 'react';
import styles from './LocChange.module.css';

const LocChange = () => {
    const [location, setLocation] = useState<string>('');
    const [newLocation, setNewLocation] = useState<string>('');
    return (
        <div>
            <p> Location Change Modal </p>  
            <p> Current Location: {location}  New Location: {newLocation} </p>
        </div>
    );
}

export default LocChange;