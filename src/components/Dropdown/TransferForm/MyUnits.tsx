import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { Header } from 'semantic-ui-react';
import IFlat from '../../../models/unit';
import { RootStoreContext } from '../../../stores/rootStore';
interface IProps {
    bookedUnits: IFlat[],
    setConfirmTransfer: React.Dispatch<React.SetStateAction<boolean>>
}
const MyUnits: React.FC<IProps> = ({ bookedUnits, setConfirmTransfer }) => {
    const store = useContext(RootStoreContext);
    const { selectFlats, unselectFlats, clearSelectedFlats, selectedFlats } = store.flatStore;
    const [checkCount, setCheckCount] = useState(0);
    const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>, flat: IFlat) => {
        const { checked } = event.currentTarget;
        if (checked) {
            setCheckCount(checkCount + 1)
            selectFlats(flat);
        }
        else {
            setCheckCount(checkCount - 1)
            unselectFlats(flat);
        }
    }
    const handleTransferClicked = () => {
        if (checkCount > 0) setConfirmTransfer(true)
        else toast.warning("Select at least 1 Unit")
    }
    return (
        <div>
            <div className="table-1">
                <Header textAlign="center" as="h1">Transfer Available Units</Header>
                {bookedUnits.length > 0 ?
                    <table>
                        <tr className="thead">
                            <th>Unit ID</th>
                            <th>Size</th>
                            <th>Bedrooms</th>
                            <th>Total Price</th>
                            <th>Booking Price</th>
                            <th>Select</th>
                        </tr>

                        {bookedUnits.map((item, index) => (
                            <tr
                                style={{ borderBottom: "1px solid #E5E5E5" }}
                                key={index}
                            >
                                <td>{item.id}</td>
                                <td>{item.size}</td>
                                <td>{item.noOfBedrooms}</td>
                                <td>Tk {item.price}</td>
                                <td>Tk {item.bookingPrice}</td>
                                <td> <input type="checkbox"
                                    name={item.id}
                                    value={item.id}
                                    onChange={(e) => checkboxHandler(e, item)}></input></td>
                            </tr>))}

                    </table>
                    : <Header textAlign="center" as="h3"> You don't have any units to transfer.</Header>}

            </div>
            <button className="btn" onClick={handleTransferClicked}>Transfer</button>
        </div>
    )
}

export default observer(MyUnits)
