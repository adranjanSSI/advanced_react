import React from 'react'

function Forms() {
    return (
        <>
            <article>
                <form className='form'>
                    <div className='form-control'>
                        <label htmlFor='firstName'>Name :</label>
                        <input type='text' id='firstname' name='firstname'></input>                  
                    </div>
                    <div className='form-control'>
                        <label htmlFor='email'>Email :</label>
                        <input type='text' id='email' name='email'></input>                  
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </article>
        </>
    )
}

export default Forms
