import React from 'react'
import { BookingItem as book } from './BookingItem'
import './onlinebooking.css'

const OnlineBooking = () => {
    return (
        <div className="online-booking">
            <div className="online-booking-container">
                <h1>Online Booking</h1>
                <div className="form-container">
                    <form action="">
                         <div id="first-name">
                            <label htmlFor="first-name"><b>First Name :</b></label>
                            <input type="text" name="first-name" required></input>
                        </div>
                        <div id="second-name">
                            <label htmlFor="second-name"><b>Second Name :</b></label>
                            <input type="text" name="second-name" required></input>
                        </div>
                        <div id="address">
                            <label htmlFor="address"><b>Address :</b></label>
                            <input type="text" name="address" required></input>
                        </div>
                        <div id="uname">
                            <label htmlFor="uname"><b>Email :</b></label>
                            <input type="email"  name="uname" required></input>
                        </div>
                        <div id="nid">
                            <label htmlFor="nid"><b>NID :</b></label>
                            <input type="text" name="nid" required></input>
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
                        <div className="upload">
                            <p>Upload Photo :</p>
                            <input type="file" id="img" name="img" accept="image/*"></input>
                            <p><i>size maximum 300 kb</i></p>
                        </div>
                        <table>
                            <tr className= "thead">
                                <th>Unit ID</th>
                                <th>Size</th>
                                <th>Bedrooms</th>
                                <th>Price</th>
                                <th>Price</th>
                                <th>Select</th>
                            </tr>
                                {book.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{item.unit}</td>
                                            <td>{item.size}</td>
                                            <td>{item.bedrooms}</td>
                                            <td>{item.price1}</td>
                                            <td>{item.price2}</td>
                                        </tr>
                                    )
                                })}
                        </table>
                        <div id="btn">
                            <button className="button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OnlineBooking
