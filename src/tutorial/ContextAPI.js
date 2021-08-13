import React, { useContext, useState } from 'react'
import reactDom from 'react-dom';
import { data } from "./data";

const PersonContext = React.createContext();
//this will return us two compeonents
function ContextAPI() {
    const [people, setpeople] = useState(data);
    const removePerson = (id) => {
        setpeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <>
            <PersonContext.Provider value={{removePerson}}>
                <h3>Context API</h3>
                <List people={people} />
            </PersonContext.Provider>
        </>
    )
}
const List = ({ people }) => {
    return <>
        {
            people.map((person) => {
                return <SinglePerson key={person.id}{...person} />;
            })
        }
    </>
}
const SinglePerson = ({ id, name }) => {
    const {removePerson}=useContext(PersonContext);
    return <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>Remove</button>
    </div>
}
export default ContextAPI
