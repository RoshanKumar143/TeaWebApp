const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db.js')
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5002;
const AuthController = require('./controller/authController.js')


app.use(cors());
app.use('/api/auth', AuthController);

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})

