import React,{useState} from 'react'
//some basic rules of all hooks basically any import/function that starts with use.
//components name must be in upper case
//must be in the function /component body
//cannot call conditionally
function UseStateBasics() {
    const [day,setDay]=useState("Today is a rainy day");
    const handleclick=()=>{
        if(day==="Today is a rainy day"){
        setDay("Today is a bright and beautiful day")}
        else{
            setDay("Today is a rainy day")
        }
    }
    return (
        <div>
            <>
            <h1>{day}</h1>
            <button type="button" className="btn" onClick={handleclick}>Change</button>
            </>
        </div>
    )
}

export default UseStateBasics
