const express = require('express');
const path = require('path');

const app = express();


//set static path
// app.usr(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('<h1>'+user+'</h1>');
})

app.get('/users/:name', (req, res) => {
    let user = req.params.name
    res.send('<h1>'+user+'</h1>');
})

