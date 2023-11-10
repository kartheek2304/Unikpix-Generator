require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require('cors');
app.use(cors());
const userRoutes = require('./routes/users.js')
const authRoutes = require('./routes/auth.js')
const connection = require('./db.js')
connection();
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);
const PORT = 5000;
app.listen(PORT,()=>{console.log('server listening at 5000')})