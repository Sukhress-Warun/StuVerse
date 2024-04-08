import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Login({login, setLogin}) {

    const [message, setMessage] = useState('')
    let navigate =  useNavigate();


    function handleLogin() {
        let email = document.getElementById('loginEmail').value
        let password = document.getElementById('loginPassword').value
        fetch('https://stuverse-backend.onrender.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.auth){
                setLogin(true)
                setMessage('')
                navigate('/')
            } else {
                setMessage(data.message)
            }      
        })
}

return (
    <>
        <h1 className="text-center my-5 light-color-text">Admin Login</h1>
        <div className="w-50 mx-auto my-5" >
            <div className="input-group flex-nowrap ">
                <span className="input-group-text grey-color-bg light-color-text">Email</span>
                <input type="email" id="loginEmail" className="form-control grey-color-bg light-color-text" placeholder="Email" />
            </div>
            <div className="input-group flex-nowrap mt-4">
                <span className="input-group-text grey-color-bg light-color-text">Password</span>
                <input type="password" id="loginPassword" className="form-control grey-color-bg light-color-text" placeholder="Password" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-dark mt-4 w-25" onClick={handleLogin} >Login</button>
                {(message!='') && <p className="lead fs-6 light-color-text mt-3">{message}</p>}
                
                <p className="lead fs-6 light-color-text mt-5"> Don't have an account?</p>
                <Link to="/signup" className="btn btn-dark w-25">Sign Up</Link>
            </div>
        </div>
    </>
)
}
