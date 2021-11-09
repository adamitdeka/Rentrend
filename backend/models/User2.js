const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const userSchema = new Schema({
    first_name: {
        type : String,
        required : true,
        trim: true,
        maxlength: 32
    },
    last_name: {
        type : String,
        required : true,
        trim: true,
        maxlength: 32
    },
    address: {
        type : String,
        required : true
    },
    email :{
        type: String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required : true
    },
    register_date :{
        type: Date,
        default: Date.now
    }

});

module.exports = User = mongoose.model('user', userSchema);