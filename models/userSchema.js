const mongoose = require('mongoose')

const userTemplate = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    dob : {
        type : Date,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required :true
    },
    photo : {
        data : Buffer,
        contentType: String
    }
}, { timestamps: true })

module.exports = mongoose.model('userTable', userTemplate)