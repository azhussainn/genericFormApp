import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Notification from '../Notifications/Notification.component'
import {
    UserContainer,
    AllUsersContainer,
    ImageContainer,
    Name,
    Details
} from './allusers.styles'

const UserComponent = () => {

    const [users, setUsers] = useState([])

    const encode = (data) => {
        let buf = Buffer.from(data);
        let base64 = buf.toString('base64');
        return base64
      }

    useEffect(() => {
        axios.get('/api/get-users')
        .then(res => {
            setUsers(res.data)
            Notification('Success', "Welcome", 'success')
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <AllUsersContainer>
            <ReactNotification />
            {
                users.map(user => (
                    <UserContainer className="user-container" key={user._id}>
                        <Name>{user.name}</Name>
                        <Details>Date of Birth : {user.dob.slice(0, 10)}</Details>
                        <Details>Email : {user.email}</Details>
                        <Details>Phone Number: {user.phone}</Details>
                        <ImageContainer className="img-container">
                            <img src={`data:image/png;base64,${encode(user.photo.data)}`}  alt={user.name}/>
                        </ImageContainer>
                    </UserContainer>
                ))
            }
        </AllUsersContainer>
    )
}

export default UserComponent