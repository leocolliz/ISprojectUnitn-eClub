const mongoose = require('mongoose')
const TeamSchema = new mongoose.Schema({
    category:{
        type: String,
        required: true
    }, 
    players:{
        type: String,
        required: true
    },
    coach:{
        type: Number,
        required: true
    },
    tm:{
        type: Number,
        required: true
    },
    status:{
        type: Number,
        default: '0'
    },
    hidden:{
        type: Number,
        default: '0'
    },
    added_by:{
        type: Number
    },
    created_at:{
        type: Date,
        default: Date.now,
        required: true
    },
    deleted_at:{
        type: Date,
    },
    updated_at:{
        type: Date
    }
})

module.exports = mongoose.model("Team", TeamSchema)


