const express = require('express');
const hbs = require('express-handlebars');

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;

app.engine('hbs', hbs({defaultLayout: 'default.hbs'}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.status(200);
    res.type('text/html');
    res.render('2dice');
})

let dice1 = 0;
let dice2 = 0;

app.get('/roll', (req, res) => {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    res.status(200);
    res.type('text/html');
    res.render('rolldice', {
        dice1Value: dice1,
        dice2Value: dice2
    })
})

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.status(200);
    res.type('text/html');
    res.render('2dice');
})

app.listen(PORT, () => {
    console.log(`Server Started on ${PORT} at ${new Date()}`);
})