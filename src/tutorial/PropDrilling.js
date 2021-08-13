import React, { useState } from 'react'
import { data } from "./data";

function PropDrilling() {
    const [people, setpeople] = useState(data);
    const removePerson = (id) => {
        setpeople((people) => {
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <>
            <section>
                <h3>prop drilling</h3>
                <List people={people} removePerson={removePerson} />
            </section>
        </>
    )
}
const List = ({ people, removePerson }) => {
    return <>
        {
            people.map((person) => {
                return <SinglePerson key={person.id}{...person}
                    removePerson={removePerson} />;
            })
        }
    </>
}
const SinglePerson = ({ id, name, removePerson }) => {
    return <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>Remove</button>
    </div>
}
export default PropDrilling
