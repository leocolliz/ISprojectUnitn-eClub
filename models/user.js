const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        //required: true
    }, 
    password:{
        type: String,
        //required: true
    },
    name:{
        type: String,
        //required: true
    },
    surname:{
        type: String,
        //required: true
    },
    a_type:{
        type: Number,
        //required: true
    },
    zip:{
        type: Number,
    }, 
    city:{
        type: String,
    },
    province:{
        type: String,
    },
    nation:{
        type: String,
    },
    street:{
        type: String,
    }, 
    phone:{
        type: String,
    },
    assign_squad:{
        type: Number
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
        type: Number,
    },
    created_at:{
        type: Date,
        default: Date.now,
        //required: true
    },
    deleted_at:{
        type: Date,
    },
    updated_at:{
        type: Date
    }
})

module.exports = mongoose.model("User", UserSchema)


