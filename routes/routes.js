const express = require('express')
const router = express.Router()
const path = require('path')
const User = require('../models/userSchema')
const CustomError = require("../utils/CustomError")
const {validateAge} = require("../utils/validation")
const {validatePhoneNumber} = require("../utils/validation")
const { validateEmail } = require("../utils/validation")
const sendMail = require('../utils/mailer')
router.post('/add-user', (req, res) =>{

    const { name, email, phone, dob  } = req.body

    const now = new Date().toISOString().slice(0, 10);

    const ageVerified = validateAge(now, dob)
    const phoneVerified = validatePhoneNumber(phone)
    const emailVerified = validateEmail(email)

    if(!ageVerified){
        const err =  new CustomError("Age Cant be Less than 18")
        return res.json(err)
    }

    if(!phoneVerified){
        const err =  new CustomError("Please Enter a valid Phone Number")
        return res.json(err)
    }

    if(!emailVerified){
        const err =  new CustomError("Please Enter a valid Email")
        return res.json(err)
    }

    if(!req.files){
        const err = new CustomError("Please Upload a photo")
        return res.json(err)
    }

    const { photo } =req.files
    if(photo){
        const photoName = photo.name
        const extension = path.extname(photoName)
        const allowedExtensions = /png|jpeg|jpg|gif/
        if(!allowedExtensions.test(extension)) throw "Unsupported Extension"
    }

    const newUser = new User({
        name,
        dob,
        email,
        phone,
        photo
    })
    newUser.save()
    .then(data => {
        res.json({data})
        sendMail(email)
    })
    .catch(err => res.json(err))
})

router.get('/get-users',  (req, res)=> {

    User.find({}).sort({'createdAt' : -1}).exec( (err, users) => {
        if(!err){
            res.json(users)
        }else{
            res.json(err)
        }

    })

})

module.exports = router