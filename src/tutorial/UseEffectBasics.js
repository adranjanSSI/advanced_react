import React,{useState,useEffect} from 'react'

function UseEffectBasics() {
    const [value,setValue]=useState(0);
    useEffect(()=>
    {
        console.log('call UseEffect');
        if(value>=1)/*if condition can't be used outside the hook*/{
        document.title=`New Messages(${value})`;}
    },[value]);

    console.log('render component')
    return (
        <>
            <h1>{value}</h1>
            <button className='btn' onClick={()=>setValue(value+1)}>
                Click Me
            </button>
            </>
    )
}

export default UseEffectBasics
