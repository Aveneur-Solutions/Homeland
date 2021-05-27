import { observer } from 'mobx-react-lite';
import React from 'react'
import { Header } from 'semantic-ui-react';
import IFlat from '../../../models/unit';
interface IProps{
  bookedUnits : IFlat[],
}
const MyUnits : React.FC<IProps> = ({bookedUnits}) => {
    return (
        <div>
            <div className="table-1">
                <Header textAlign="center" as="h1">Select Units To Transfer</Header>
                <table>
                    <tr className="thead">
                        <th>Unit ID</th>
                        <th>Size</th>
                        <th>Bedrooms</th>
                        <th>Total Price</th>
                        <th>Booking Price</th>
                        <th>Select</th>
                    </tr>
                    {bookedUnits.map((item, index) => {
                        return (
                            <tr
                                style={{ borderBottom: "1px solid #E5E5E5" }}
                                key={index}
                            >
                                <td>{item.id}</td>
                                <td>{item.size}</td>
                                <td>{item.noOfBedrooms}</td>
                                <td>Tk {item.price}</td>
                                <td>Tk {item.bookingPrice}</td>
                                <td> <input type="checkbox" name="someone"></input></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
            <button className="btn">Transfer</button>
        </div>
    )
}

export default observer(MyUnits)
