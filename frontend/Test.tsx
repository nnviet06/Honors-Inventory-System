import {useState} from 'react';

type User = {
    name: string;
    age: number;
}

const Test = () => {
    const [user, setUser] = useState<User>({name: 'Initial Name', age: 0});
    const [age, setAge] = useState<number>(0);

    const changeName = () => {
        setUser({...user, name: 'Change Name'});
    };

    const changeAge = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <p> User information</p>
            <p> Name: {user.name}  Age: {age} </p>
            <button onClick={changeName}> Change Name </button>
            <button onClick={changeAge}> Increase Age </button>
        </div>
    );
}

export default Test;