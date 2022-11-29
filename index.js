const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');
const logger = require('./middleware/logger');

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});

const app = express();

app.use(logger);
const PORT = process.env.PORT || 5003;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
});
