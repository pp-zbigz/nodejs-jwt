const express = require('express');

const restaurantsRouter = require('./routes/restaurants')

const app = express();

// Routes

app.use('/apis/restaurants', restaurantsRouter);

router.get('', (req, res) => {
    res.send('GET API');
});