import mongoose from "mongoose";

var usuarioSchema = new mongoose.model('users', {
    fullName: String,
    email: String,
    address: String,
    addressNumber: Number,
    phoneNumber: String
});


export default usuarioSchema;