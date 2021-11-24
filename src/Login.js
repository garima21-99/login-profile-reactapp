import React from 'react'
import { NavLink } from 'react-router-dom'


const Login = () => {

    return (
        <>
            <div className="logindiv">
            <center>
                <div className="login-container">
                    <h1 className="login">Login</h1>
                    <form>
                        <label>Name </label><br/>
                        <input type="text" placeholder="Enter Your Name" required/><br/>
                        <label>Password </label><br/>
                        <input id="passwrd"type="password" placeholder="Enter Your Password" required/><br/>
                        <NavLink className="btn" to="/profile"> Submit</NavLink>
                        
                      
                    </form>
                </div>
            </center>
            </div>
        </>
    )
}

export default Login
