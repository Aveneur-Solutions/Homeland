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
                            <div id="phone">
                                <label htmlFor="phone"><b>New allottee's Phone :</b></label>
                                <input type="email" name="phone" required></input>
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
                        <h5 style={{textAlign: 'center'}}>Number of days left for the down payment</h5>
                        <div className="down-payment">
                            <div className="day">7</div>
                            <div className="hour">7</div>
                            <div className="sec">7</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default TransferForm
