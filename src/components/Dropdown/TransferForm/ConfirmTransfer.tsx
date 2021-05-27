import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Header, Segment } from 'semantic-ui-react'
import { ITransferPost } from '../../../models/transfer'
import IFlat from '../../../models/unit'
import IUser from '../../../models/user'
import { RootStoreContext } from '../../../stores/rootStore'
import UserCard from './UserCard'

const ConfirmTransfer = () => {
    const store = useContext(RootStoreContext)
    const { selectedFlats, unselectFlats, clearSelectedFlats ,transferNow} = store.flatStore;
    const { recieverUser: user } = store.userStore;
    const {register,handleSubmit, formState: { errors }} = useForm<ITransferPost>();
    useEffect(() => {
        return () => {
            clearSelectedFlats()
        }
    }, [clearSelectedFlats])
    const handleTransfer = (data : ITransferPost) => {
        data.recieverPhoneNumber = user?.phoneNumber;
        let flatIds : string[] = [];
        selectedFlats.map(flat => {
            flatIds.push(flat.id)
        })
        data.flatIds = flatIds;
        transferNow(data)
        console.log(data);
    }
    return (
        <div>
            <Header textAlign="center">Transfering {selectedFlats.length} Units</Header>
            <div className="table-1">
                <table className="tableBook">
                    <thead>
                        <tr className="thead">
                            <th>Unit ID</th>
                            <th>Size</th>
                            <th>Bedrooms</th>
                            <th>Price</th>
                            <th>Price</th>
                            <th>select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedFlats.map((item) => {
                            return (
                                <tr
                                    style={{ borderBottom: "1px solid #E5E5E5" }}
                                    key={item.id}
                                >
                                    <td>{item.id}</td>
                                    <td>{item.size}</td>
                                    <td>{item.noOfBedrooms}</td>
                                    <td>{item.price}</td>
                                    <td>{item.bookingPrice}</td>
                                    <td>
                                        <i
                                            className="fas fa-trash"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => unselectFlats(item)}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Segment textAlign="center">
                <Header>Reciever Details</Header>
                    <div style={{ marginLeft: "32px", marginTop: "10px" }} className="profile-content">
                        <p>NAME: &nbsp;{user?.fullname}</p>
                        <p>ADDRESS: &nbsp; Not added yet</p>
                        <p>PHONE: &nbsp; {user?.phoneNumber}</p>
                    </div>
                </Segment>
                <Segment>
                    <form onSubmit={handleSubmit(handleTransfer)}>
                        <input type="password"  {...register("password", { required: true })}/>
                        {errors.password && <span>Password must not be empty</span>}
                        <input type="submit" value="Transfer" className="btn"/>
                    </form>
                </Segment>

            </div>

        </div>
    )
}

export default observer(ConfirmTransfer)
