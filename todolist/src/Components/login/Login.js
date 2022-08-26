import React, { useState } from 'react'
import {Alert} from 'react-bootstrap'
import Todo from '../todolist/todo/Todo'

function Login() {
    const [usernamelog, setUsernamelog] = useState("")
    const [passwordlog, setPasswordlog] = useState("")
    const [flag, setFlag] = useState(false)
    const [todo, setTodo] = useState(true)


function handleLogin(e){
    e.preventDefault();
    let user = localStorage.getItem("username").replace(/"/g,"")
    let pass = localStorage.getItem("password").replace(/"/g,"")

    if(!usernamelog || !passwordlog){
        setFlag(true)
        console.log("Emply")
    }else if (passwordlog !== pass || usernamelog !==user){
        setFlag(true)
    }else{
        setTodo(!todo)
        setFlag(false)
    }

}

  return (
    <div>
        {todo ? (
        <form onSubmit={handleLogin} >
            <h1>Log In</h1>
            <div className='form-group'>
                <label>Username</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder ='Ingresa tu Username'
                    onChange={(event)=> setUsernamelog(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Contraseña</label>
                <input
                    type='password'
                    className='form-control'
                    placeholder='Ingresa tu contraseña'
                    onChange={(event)=> setPasswordlog(event.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block' >Log In</button>
            <p >Already Registered {" "} Sign in? </p>

            {flag && (
                <Alert color="primary" variant='danger'>
                    Datos Incorrectos. Intenta de nuevo.
                </Alert>
            )}  
        </form>
        ):(
            <Todo/>
        ) }
    </div>
  )
}

export default Login