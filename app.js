const express = require('express');

const restaurantsRouter = require('./routes/restaurants');

const logger = require('./middleware/logger');
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false }));

//Custom Middleware
app.use(logger);

// Routes
app.use('/apis/restaurants', restaurantsRouter);

app.listen(3000, () => {
    console.log('Listening to port 3000');
});