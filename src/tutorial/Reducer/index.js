import React,{useState,useReducer} from 'react'
import Modal from './modal';
import {data} from "../data";
function Index() {
    const [name,setName]=useState('');
    const [people,setPeople]=useState(data);
    const [showModal,setShowModal]=useState(false);
    const handleSubmit=(e)=>
    {
        e.preventDefault();
    }
    return (
        <>
            {showModal && <Modal/>}
            <form onSubmit={handleSubmit} className='form'>
            <div>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <button type='submit'>Add User</button>
            </form>
        </>
    )
}

export default Index
