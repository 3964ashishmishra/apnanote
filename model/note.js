const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'user'
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        require: true
    }
    
})

const Notes = mongoose.model('note',notesSchema);
module.exports = Notes;