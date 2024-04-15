import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    name: String,
    Username: String,
    email: String,
    phone: String,
});


const User = mongoose.model('User', userSchema); // Capitalize "User" to follow convention
export default User;