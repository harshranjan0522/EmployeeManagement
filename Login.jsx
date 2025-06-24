import React, { useState } from 'react';
import './Login.css';


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // TWO WAY BINDING
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='container'>
            <h1><strong>LOGIN</strong></h1>

            <form className='form' onSubmit={(e)=>{
                submitHandler (e)
            }}>

                <input required type="email" placeholder='ENTER YOUR EMAIL' 
                value={email}
                onChange={ (e) => {
                    setEmail(e.target.value)
                }}
                />

                <input required type="password" placeholder='ENTER YOUR PASSWORD' 
                value={password}
                onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                }
                />

                <button>LOGIN</button>

            </form>
        </div>
    );
};

export default Login;
