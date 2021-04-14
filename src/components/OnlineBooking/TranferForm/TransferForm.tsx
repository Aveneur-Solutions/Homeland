import React, { Component } from 'react'
import { TransferItem as transfer } from './TransferItem'
import './transferform.css'

class TransferForm extends Component  {
    render() {
        return (
            <div className="online-booking">
                <div className="online-booking-container">
                    <h1>Transfer Form</h1>
                    <div className="form-container">
                        <form action="">
                            <div id="first-name">
                                <label htmlFor="first-name"><b>New allottee's First Name :</b></label>
                                <input type="text" name="first-name" required></input>
                            </div>
                            <div id="second-name">
                                <label htmlFor="second-name"><b>New allottee's Second Name :</b></label>
                                <input type="text" name="second-name" required></input>
                            </div>
                            <div id="address">
                                <label htmlFor="address"><b>New allottee's Address :</b></label>
                                <input type="text" name="address" required></input>
                            </div>
                            <div id="uname">
                                <label htmlFor="uname"><b>New allottee's Email :</b></label>
                                <input type="email"  name="uname" required></input>
                            </div>
                            <div id="nid">
                                <label htmlFor="nid"><b>New allottee's NID :</b></label>
                                <input type="text" name="nid" required></input>
                            </div>
                            <div id="phone">
                                <label htmlFor="phone"><b>New allottee's Phone :</b></label>
                                <input type="email" name="phone" required></input>
                            </div>
                            <div id="dob">
                                <label htmlFor="dob"><b>New allottee's Birth Date :</b></label>
                                <input type="text" name="dob" required></input>
                            </div>
                            <div className="upload">
                                <p>Upload Photo :</p>
                                <input type="file" id="img" name="img" accept="image/*"></input>
                                <p><i>size maximum 300kb</i></p>
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
                                    {transfer.map((item, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{item.unit}</td>
                                                <td>{item.size}</td>
                                                <td>{item.bedrooms}</td>
                                                <td>{item.price1}</td>
                                                <td>{item.price2}</td>
                                                <td>{item.select}</td>
                                            </tr>
                                        )
                                    })}
                            </table>
                            <button className="btn">Transfer</button>
                        </form>
                        <div className="down-payment">
                            <div className="day"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default TransferForm
