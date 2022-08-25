import React, { useState } from 'react'
import {Alert} from 'react-bootstrap'
import Login from '../login/Login'

function Register() {
    
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true)

    function handleSumit(e){
        e.preventDefault();

        if(!name || !username || !password){
            setFlag(true)
        }else {
            setFlag(false)
            localStorage.setItem("name", JSON.stringify(name))
            localStorage.setItem("username", JSON.stringify(name))
            localStorage.setItem("password", JSON.stringify(password))

            console.log("Registro Exitoso")

            setLogin(!login)
        }
    }


    function handleClick(){
        setLogin(!login)
    }

  return (
    <div>
        {login ? (
        <form onSubmit={handleSumit} >
            <h1>Sign In</h1>
            <div className='form-group'>
            <label>Nombre</label>
            <input
                type= 'text'
                className='form-control'
                placeholder='Ingresa tu Nombre'
                onChange={(event)=> setName(event.target.value)}

            />
            </div>
            <div className='form-group'>
                <label>Username</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder ='Ingresa tu Username'
                    onChange={(event)=> setUsername(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Contraseña</label>
                <input
                    type='password'
                    className='form-control'
                    placeholder='Ingresa tu contraseña'
                    onChange={(event)=> setPassword(event.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block' >Sign In</button>
            <p onClick={handleClick} >Already Registered {" "} login in? </p>     

            {flag && (
                <Alert color="primary" variant='danger'>
                    Porfavor llena todos los datos.
                </Alert>
            )}

        </form>
        ):(
        <Login/>
        )}
    </div>
  )
}

export default Register