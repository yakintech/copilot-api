const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet'); // Helmet'i ekleyin
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const blogCategoryRoutes = require('./routes/blogCategoryRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Veritabanı bağlantısı
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(helmet()); // Helmet'i kullanın

// Rotalar
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', blogRoutes);
app.use('/api', blogCategoryRoutes);

// Basit bir rota
app.get('/', (req, res) => {
    res.send('Merhaba Dünya!');
});

// Hata işleyici middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor.`);
});