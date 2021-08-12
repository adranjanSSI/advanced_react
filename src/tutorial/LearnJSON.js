import React from 'react'
import axios from 'axios'
function LearnJSON() {
    const handleClick=(b)=>
    {
        const promise=axios.post("http://localhost:4000/users",
        {name:"Bruce Wayne"},{
            headers:{
                ['content-type']:'application/json'}
            
        })
    
    promise.then(response=>{console.log(response)
    })
    promise.catch(error=>{
        console.error(error);
    })
    let c=b;
    console.log(c);
}
    return (
        <>
            <h2>Randome Title</h2>
            <button type='button' className='btn' onClick={handleClick}>post users</button>
           {/*<button type='button' className='btn' onClick={getUsers}>Get users</button>*/}
        </>
    )
}

export default LearnJSON
