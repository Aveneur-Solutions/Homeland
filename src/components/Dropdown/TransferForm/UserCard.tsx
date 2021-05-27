import { observer } from 'mobx-react-lite'
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import IUser from '../../../models/user'
interface IProps{
    user : IUser,
    setUnitVisibility: React.Dispatch<React.SetStateAction<boolean>>
}
const UserCard : React.FC<IProps> = ({user,setUnitVisibility}) => {
    return (
        <div style={{marginBottom:"20px"}}>
            <Card centered >
                <Image size="small" circular centered src='/images/profile_main.png' wrapped  />
                <Card.Content>
                    <Card.Header>{user.fullname}</Card.Header>
                    <Card.Meta>Phone Number :  {user.phoneNumber}</Card.Meta>
                   
                </Card.Content>
                <Card.Content extra>
                    <button onClick={() => setUnitVisibility(true)} className="btn">Proceed</button>
                </Card.Content>
            </Card>
        </div>
    )
}

export default observer(UserCard)
