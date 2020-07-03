const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;


const SignupSchema = new Schema({
    fstName: String,
    lstName: String,
    dob: Date,
    gender: Number,
    user: Number,
    email: String,
    password: String,
    confirmpassword: String,
    telephone: String
});

var Signupdata = mongoose.model('signupdata', SignupSchema);


module.exports = Signupdata;