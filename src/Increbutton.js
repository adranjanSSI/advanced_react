import React, { useState } from 'react'

function Ibutton() {
    const [counter, setCounter] = useState(0);
    const handleclick1 = () => setCounter(counter + 1);
    const handleclick2 = () => setCounter(counter - 1);
    const handleclick3 = () => setCounter(0);
    return (
        <>
            <div class="header">
                <a href="https://www.soprasteria.com/" class="logo">Sopra Steria</a>
                <div class="header-right">
                    <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
            <button className='btn' onClick={handleclick1}>
                +1
            </button>
            <button className='btn' onClick={handleclick2}>
                -1
            </button>
            <button className='btn' onClick={handleclick3}>
                Reset
            </button>
            <div className='item'>{counter}</div>
        </>
    )
}

export default Ibutton
