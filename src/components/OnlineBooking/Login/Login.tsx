/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <h1>LOG IN</h1>
                <form action="">
                    <div className="form-container">
                        <div id="uname">
                            <label htmlFor="uname"><b>EMAIL OR PHONE</b></label>
                            <input type="email" placeholder="EMAIL OR PHONE" name="uname" required></input>
                        </div>
                        <div id="psw">
                            <label htmlFor="psw"><b>PASSWORD</b></label>
                            <input type="password" placeholder="ENTER PASSWORD" name="psw" required></input>
                        </div>
                        <div id="btn">
                            <button className="button">Submit</button>
                        </div>
                        <div id="links">
                            <div className="forget-pas">
                                <a href="#">Forget Password?</a>
                            </div>
                            <div className="reg-acc">
                               <a href="#">Register an Account</a> 
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
