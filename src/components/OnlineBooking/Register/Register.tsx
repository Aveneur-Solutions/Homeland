import React from 'react'
import'./register.css'

const Register = () => {
    return (
          <div className="register">
            <div className="register-container">
                <h1>REGISTER</h1>
                <form action="">
                    <div className="form-container">
                         <div id="name">
                            <label htmlFor="name"><b>Name :</b></label>
                            <input type="text" name="name" required></input>
                        </div>
                        <div id="uname">
                            <label htmlFor="uname"><b>Email :</b></label>
                            <input type="email"  name="uname" required></input>
                        </div>
                         <div id="phone">
                            <label htmlFor="phone"><b>Phone :</b></label>
                            <input type="email" name="phone" required></input>
                        </div>
                        <div id="dob">
                            <label htmlFor="dob"><b>Birth Date :</b></label>
                            <input type="text" name="dob" required></input>
                        </div>
                        <div id="psw">
                            <label htmlFor="psw"><b>Password :</b></label>
                            <input type="password" name="psw" required></input>
                        </div>
                        <div id="con-psw">
                            <label htmlFor="con-psw"><b>Confirm Password :</b></label>
                            <input type="password" name="con-psw" required></input>
                        </div>
                        <div id="btn">
                            <button className="button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
