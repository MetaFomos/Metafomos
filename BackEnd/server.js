const express = require('express');
const connectDB = require('./config/db');

const bodyParser = require('body-parser');

const app = express();

//Connect Database
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Init Middleware
app.use(express.json());

//Define Routes
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));