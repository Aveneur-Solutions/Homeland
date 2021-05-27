import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { RootStoreContext } from '../../../stores/rootStore';
import MyUnits from './MyUnits';
import UserCard from './UserCard';
import UserSearchForm from './UserSearchForm';

const TransferUnit = () => {
    const store = useContext(RootStoreContext);
    const { myBookedFlats, getMyBookedFlats,searchUser,recieverUser,emptyRecieverUser} = store.userStore;
    const [unitVisibility,setUnitVisibility] = useState(false);
   
    useEffect(() => {
            getMyBookedFlats()  
        return () =>{
          emptyRecieverUser();
          };
      
    }, [getMyBookedFlats])
    return (
        <div className="online-booking">
            <div className="online-booking-container">
            <UserSearchForm getUser={searchUser} user={recieverUser!}/>
            {recieverUser && <UserCard setUnitVisibility={setUnitVisibility} user={recieverUser}/>}
           {unitVisibility && myBookedFlats && <MyUnits bookedUnits={myBookedFlats}/>} 
            </div>           
        </div>
    )
}

export default observer(TransferUnit)
