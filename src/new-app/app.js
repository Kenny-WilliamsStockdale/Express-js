const express = require('express'); //routes express pug express can be helpfull
const path = require('path');

const app = express();


//set static path
app.use(express.static(path.join(__dirname, 'public')));


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

app.listen(3000, () => {
    console.log('listening on port 3000');
})