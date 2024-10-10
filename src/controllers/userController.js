const bcrypt = require('bcrypt');
const User = require('../models/User');

// Kullanıcı oluşturma (Create)
exports.createUser = async (req, res) => {
    try {
        const { email, phone, address, password } = req.body;

        // Tüm zorunlu alanların sağlandığından emin olun
        if (!email || !phone || !address || !password) {
            return res.status(400).json({ error: 'All fields are required: email, phone, address, password' });
        }

        // Email doğrulama
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email' });
        }

        // Parolayı hashleme
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ email, phone, address, password: hashedPassword });
        await user.save();

        res.status(201).json(user);
    } catch (error) {
        console.error('Kullanıcı oluşturma hatası:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Tüm kullanıcıları getirme (Read)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password -__v');
        res.status(200).json(users);
    } catch (error) {
        console.error('Kullanıcıları getirme hatası:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Belirli bir kullanıcıyı getirme (Read)
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password -__v');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Belirli bir kullanıcıyı getirme hatası:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Kullanıcı güncelleme (Update)
exports.updateUser = async (req, res) => {
    try {
        const { password, ...updateData } = req.body;

        // Şifre güncelleniyorsa hashleme
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }

        const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true }).select('-password -__v');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Kullanıcı güncelleme hatası:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Kullanıcı silme (Delete)
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).select('-password -__v');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Kullanıcı silme hatası:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};