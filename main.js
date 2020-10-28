const express = require('express');
const hbs = require('express-handlebars');

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;

app.engine('hbs', hbs({defaultLayout: 'default.hbs'}));
app.set('view engine', 'hbs');

app.get(['/', '/index.html'], (req, res) => {
    res.status(200);
    res.type('text/html');
    res.render('2dice');
})

let dice1 = 0;
let dice2 = 0;

const roll_dice = () => Math.floor(Math.random() * 6) + 1;

const DICE_IMG = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

app.get('/roll', (req, res) => {
    dice1 = roll_dice();
    dice2 = roll_dice();
    res.status(200);
    res.type('text/html');
    res.render('rolldice', {
        dice1Value: DICE_IMG[dice1-1],
        dice2Value: DICE_IMG[dice2-1]
    })
})

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    // res.status(200);
    // res.type('text/html');
    // res.render('2dice');
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log(`Server Started on ${PORT} at ${new Date()}`);
})