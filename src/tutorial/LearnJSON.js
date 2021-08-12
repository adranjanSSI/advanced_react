import React from 'react'
import axios from 'axios'
function LearnJSON() {
    const handleClick=(b)=>
    {
        const promise=axios.post("http://localhost:4000/users"//setting the port code
        ,{name:"Barry Allen"},{
            headers:{
                ['content-type']:'application/json'//setting the server type
            }
            
        })
    
    promise.then(response=>{console.log(response)//this is used to console log aur response from the server.
    })
    promise.catch(error=>{
        console.error(error);//this is used to console log aur error in case we get one.
    })
    let c=b;
    console.log(c);
}
const getUsers=()=>{
    axios.get("http://localhost:4000/users").then(users=>{
        console.log(users);//we are getting the data from our json server and then storing it in users then consoling the array of the objects.
    })
}
    return (
        <>
            <h2>Randome Title</h2>
            <button type='button' className='btn' onClick={handleClick}>post users</button>
           <button type='button' className='btn' onClick={getUsers}>Get users</button>
        </>
    )
}

export default LearnJSON
