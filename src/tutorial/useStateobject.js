import React,{useState} from 'react'

function UseStateObject() {
    const [person,setPerson]=useState({
        name:"Groot",
        age:5,
        message:"I am Groot",
    });
    const [name,setName]=useState(
        "Bruce Wayne"
    )
    const [age,setAge]=useState(
       45
    )
    const [message,setMessage]=useState(
        "I am Batman"
    )
    
    const changeMessage=()=>{
        setPerson({...person,message:"I am Grooooot!!"})
    }
    
    return (
    <div>
        <>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{message}</h3>
        <button className='btn' onClick={changeMessage}>change Message</button>
        </>
    </div>
    )
}

export default UseStateObject
