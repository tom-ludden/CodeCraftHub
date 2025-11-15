require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const initServer = require('./config/server');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler')
const app = initServer();
connectDB();
app.use('/api/users', userRoutes);
app.use(errorHandler)
const PORT = process.env.PORT || 0; // 0 means pick any available port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




