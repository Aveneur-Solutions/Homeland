import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { RootStoreContext } from '../../../stores/rootStore';
import ConfirmTransfer from './ConfirmTransfer';
import MyUnits from './MyUnits';
import UserCard from './UserCard';
import UserSearchForm from './UserSearchForm';

const TransferUnit = () => {
    const store = useContext(RootStoreContext);
    const { myBookedFlats,transferrableFlats, getMyBookedFlats, searchUser, recieverUser, emptyRecieverUser } = store.userStore;
    const { selectedFlats } = store.flatStore;
    const [unitVisibility, setUnitVisibility] = useState(false);
    const [confirmTransfer, setConfirmTransfer] = useState(false);
    useEffect(() => {
        getMyBookedFlats()
        return () => {
            emptyRecieverUser();
        };

    }, [getMyBookedFlats])
    return (
        <div className="online-booking">
          
            <div className="online-booking-container">
            {confirmTransfer && <button className="btn" onClick={() => setConfirmTransfer(false)}>Back to transfer</button>}
                {!confirmTransfer &&
                    <>
                       <UserSearchForm getUser={searchUser} user={recieverUser!} />
                        
                            {recieverUser && <UserCard setUnitVisibility={setUnitVisibility} user={recieverUser} />}
                            {unitVisibility && myBookedFlats && <MyUnits bookedUnits={transferrableFlats} setConfirmTransfer={setConfirmTransfer} />}
                        
                    </>
                }
                {confirmTransfer && recieverUser && <ConfirmTransfer  />}
            </div>

        </div>
    )
}

export default observer(TransferUnit)
