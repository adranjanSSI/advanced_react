import React,{useState} from 'react'

function UseStateobject() {
    let title="Random Title";
    const handleclick= ()=>{
        title="My name is Aditya";
        console.log(title);
    }
    return (<React.Fragment>
        <h2>{title}</h2>
        <button type="button" className="btn" onClick={handleclick}>Change Title</button>
        </React.Fragment>
    );
}

export default UseStateobject
