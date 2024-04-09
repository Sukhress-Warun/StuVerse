import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Signup({login, setLogin}) {

    const [message, setMessage] = useState('')
    let navigate =  useNavigate();

    function handleSignup() {
        let email = document.getElementById('signupEmail').value
        let password = document.getElementById('signupPassword').value
        let confirmPassword = document.getElementById('signupConfirmPassword').value
        if(password !== confirmPassword){
            setMessage('Passwords do not match')
            return
        }
        fetch('https://stuverse-backend.onrender.com/user/signup', {
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
            if(data.created){
                setLogin(true)
                setMessage('')
                navigate('/')
            } else {
                setMessage(data.message)
            }      
        })
    }
    return (
        <div className='row'>
            <h1 className="text-center my-5 light-color-text">Create Account</h1>
            <div className="col-lg-6 col-10 mx-auto my-5" >
                <div className="input-group flex-nowrap ">
                    <span className="input-group-text grey-color-bg light-color-text">Email</span>
                    <input type="email" id="signupEmail" className="form-control grey-color-bg light-color-text" placeholder="Email" />
                </div>
                <div className="input-group flex-nowrap mt-4">
                    <span className="input-group-text grey-color-bg light-color-text">Password</span>
                    <input type="password" id="signupPassword" className="form-control grey-color-bg light-color-text" placeholder="Password" />
                </div>
                <div className="input-group flex-nowrap mt-4">
                    <span className="input-group-text grey-color-bg light-color-text">Confirm Password</span>
                    <input type="password" id="signupConfirmPassword" className="form-control grey-color-bg light-color-text" placeholder="Confirm Password" />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-dark mt-4 w-25" onClick={handleSignup}>Signup</button>
                    {(message!='') && <p className="lead fs-6 light-color-text mt-3">{message}</p>}

                    <p className="lead fs-6 light-color-text mt-5"> Already have an account?</p>
                    <Link to="/login" className="btn btn-dark w-25">Login</Link>
                </div>
            </div>
        </div>
    )
}
