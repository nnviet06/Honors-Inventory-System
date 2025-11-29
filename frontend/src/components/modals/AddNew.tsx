import {useState, useEffect } from 'react';
import styles from './AddNew.module.css';

const AddNew = () => {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);      
    return (
        <div>
            <p> Add New Modal </p>  
            <p> Name: {name}  Age: {age} </p>
        </div>
    );
}

export default AddNew