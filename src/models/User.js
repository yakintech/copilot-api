const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    profileImage: { type: String, default: 'https://via.placeholder.com/150' } 
});

const User = mongoose.model('User', userSchema);

module.exports = User;