import {useState, useEffect} from 'react';
import './EquipTable.module.css';

const EquipTable = () => {
    const [items, setItems] = useState<Array<{id: number; name: string;}>>([]);
    return (
        <div>
            <p> Equipment Table Component </p>
            <ul>
                {items.map(item => (        
                    <li key={item.id}> {item.name} </li>
                ))}
            </ul>
        </div>
    );
}   


export default EquipTable;