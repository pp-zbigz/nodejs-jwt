const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/apis/restaurants', (req, res) => {
    res.send('GET API');
});

app.get('/apis/restaurants/:id', (req, res) => {
    res.send('GET ONE API');
});

app.post('/apis/restaurants', (req, res) => {
    res.send('POST API');
});

app.put('/apis/restaurants/:id', (req, res) => {
    res.send('PUT API');
});
app.delete('/apis/restaurants', (req, res) => {
    res.send('DELETE API');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000);