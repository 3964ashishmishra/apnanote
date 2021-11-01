const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    date: {
        type:Date,
        default: Date.now
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    },
    token:{
        type:String
    }
})

const User = mongoose.model('user',userSchema);
module.exports = User;