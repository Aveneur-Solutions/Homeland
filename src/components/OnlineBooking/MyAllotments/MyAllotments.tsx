import React from 'react'
import './myAllotments.css'
import { allotmentItems as allotment} from './allotmentItems'
import {transferredItems as transferred} from './allotmentItems'
import { observer } from 'mobx-react-lite'

const MyAllotments = () => {
    return (
        <div className="my-allotment">
            <div className="my-allotment-container">
                <h1 style={{textAlign: 'center'}}>My Allotments</h1>
                <div className="allotment-content">
                    <div className="profile">
                        <div className="profile-img">
                            <img width="100px" style={{borderRadius: '50px'}} src={process.env.PUBLIC_URL + "/images/profile.png"} alt=""/>
                        </div>
                        <div className="profile-content">
                            <p>NAME: Zunaid</p>
                            <p>ADDRESS: Dick Avenue</p>
                            <p>PHONE: 69420</p>
                            <p>EMAIL: gay@gmail.com</p>
                        </div>
                        <div className="profile-homeland-logo">
                            <img width="150px" style={{backgroundColor: "black"}} src={process.env.PUBLIC_URL + "/images/logo.png"} alt=""/>
                        </div>
                    </div>
                    <div className="table-content">
                        <h3>Alloted:</h3>
                        <div className="table-1">
                            <h4>Select Units To Transfer</h4>
                            <table>
                                <tr className= "thead">
                                    <th>Unit ID</th>
                                    <th>Size</th>
                                    <th>Bedrooms</th>
                                    <th>Price</th>
                                    <th>Transfer</th>
                                </tr>
                                {allotment.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{item.unit}</td>
                                                    <td>{item.size}</td>
                                                    <td>{item.bedrooms}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.select}</td>
                                                </tr>
                                            )
                                        })}
                            </table>
                            <button className="transfer-button">Next</button>
                        </div>
                        <div className="table-2">
                            <h4>Transferred</h4>
                            <table>
                                <tr className= "thead">
                                    <th>Unit ID</th>
                                    <th>Size</th>
                                    <th>Bedrooms</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                </tr>
                                {transferred.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{item.unit}</td>
                                                    <td>{item.size}</td>
                                                    <td>{item.bedrooms}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.date}</td>
                                                </tr>
                                            )
                                        })}
                            </table>
                        </div>
                        <div className="bottom-content">
                            <h5 style={{textAlign: 'center'}}>Number of days left for the down payment</h5>
                            <div className="allotment-down-payment">
                                <div className="day">7</div>
                                <div className="hour">7</div>
                                <div className="sec">7</div>
                            </div>
                            <p style={{color: 'red', padding: '5px', width: '55%', textAlign: 'center', marginLeft: '20%'}}>You can transfer your allotment through our website only once. Want to transfer allotment?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(MyAllotments)
