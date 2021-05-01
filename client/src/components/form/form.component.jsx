import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Notification from '../Notifications/Notification.component'

import {
    FormContainer,
    Input,
    Button,
    ButtonLabel
} from './form.styles'

const Form = () => {

    let history = useHistory()

    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [photo, setPhoto] = useState('')
    const [fileName, setFileName] = useState("Upload Photo")

    const handleSubmit = (e) => {
        e.preventDefault()

        const fd = new FormData()
        fd.append('photo', photo)
        fd.append('name', name)
        fd.append('dob', dob)
        fd.append('email', email)
        fd.append('phone', phone)

        axios.post('/api/add-user',
            fd, {
                headers : {
                    'Content-Type':'multipart/form-data'
                }
            }
        ).then(res => {

            if(res.data.name === "CustomError"){
                console.log(res.data.message)
                Notification('Error', res.data.message, 'danger')
            }else{
                setName("")
                setDob("")
                setPhone("")
                setEmail("")
                setPhone("")
                setFileName('Upload Photo')
                history.push("/show-users")
            }
        })
        .catch(err => console.log(err))

    }


    return(
        <FormContainer
            onSubmit={handleSubmit}
            novalidate
        >
            <ReactNotification />
            <Input
                type='text'
                name ="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
            />

            <Input
                type='date'
                name ='dob'
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                placeholder="Date of Birth"
            />

            <Input
                type='email'
                name ="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />

            <Input
                type='number'
                name ="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                required
            />

            <Input
                type="file"
                id="fileUploadBtn"
                onChange={(e) => {
                    setPhoto(e.target.files[0])
                    setFileName(e.target.files[0].name.slice(0, 12) + "...")
                } }
                hidden
            />
            <ButtonLabel htmlFor="fileUploadBtn"
            >
                {fileName}
            </ButtonLabel>

            <Button>
                Submit
            </Button>

        </FormContainer>
    )}

export default Form