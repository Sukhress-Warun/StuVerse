import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <h1 className="text-center my-5 light-color-text">Create Account</h1>
            <div className="w-50 mx-auto my-5" >
                <div className="input-group flex-nowrap ">
                    <span className="input-group-text grey-color-bg light-color-text">Email</span>
                    <input type="email" className="form-control grey-color-bg light-color-text" placeholder="your Email" />
                </div>
                <div className="input-group flex-nowrap mt-4">
                    <span className="input-group-text grey-color-bg light-color-text">Password</span>
                    <input type="password" className="form-control grey-color-bg light-color-text" placeholder="Password" />
                </div>
                <div className="input-group flex-nowrap mt-4">
                    <span className="input-group-text grey-color-bg light-color-text">Confirm Password</span>
                    <input type="password" className="form-control grey-color-bg light-color-text" placeholder="Password" />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                <button  className="btn btn-dark mt-4 w-25" >Signup</button>
                <p className="lead fs-6 light-color-text mt-5"> Already have an account?</p>
                <Link to="/login" className="btn btn-dark w-25">Login</Link>
                </div>
            </div>
        </>
    )
}
