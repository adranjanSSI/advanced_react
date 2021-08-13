import React,{useState} from 'react'

function ToDoList() {
    //const [firstName,setFirstName]=useState("");
    //const [email,setEmail]=useState("");
    const [people,setPeople]=useState([]);
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [todo,setTodo]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();//this will prevent default behaviour of the browser
        if(time && date && todo){
            console.log('submit the value')
            const person={id: new Date().getTime().toString(),todo,date,time};
            console.log(person);
            ;
            //const person={firstName:firstName,email:email};
            setPeople((people)=>{
                return [...people,person];
            });
            //setFirstName('');
            setDate('');
            setTime('');
            setTodo('');
        }
        else{
            console.log('empty value');
        }
    }
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                        <label htmlFor='todo'>Task :</label>
                        <input type='text' id='todo' name='todo' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>                  
                    </div>
                    <div className='form-control'>
                        <label htmlFor='date'>Date :</label>
                        <input type='date' id='date' name='date' value={date} onChange={(e)=>setDate(e.target.value)}></input>                  
                    </div>
                    <div className='form-control'>
                        <label htmlFor='time'>Time :</label>
                        <input type='time' id='time' name='time' value={time} onChange={(e)=>setTime(e.target.value)}></input>                  
                    </div>
                    
                    <button type='submit' >Submit</button>
                </form>
                {people.map((person,index)=>
                {
                    const {id,firstName,date,time,todo}=person;
                    return(
                    <div className="item" key={id}>
                        
                        <p>
                            {date}
                        </p>
                        <p>{time}</p>
                        <h4>{todo}</h4>
                    </div>);
                })}
            </article>
        </>
    )
}

export default ToDoList
