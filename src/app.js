const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {console.log("Server running in port 3000")});

app.use(express.static(path.join(__dirname,'../public')));
console.log(path.join(__dirname,'../public'));

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, './views/home.html'))});
app.get('/login', (req, res) => {res.sendFile(path.join(__dirname, '/views/login.html'))});
app.get('/register', (req, res) => {res.sendFile(path.join(__dirname, '/views/register.html'))})
app.get('/productCart', (req, res) => {res.sendFile(path.join(__dirname, '/views/productCart.html'))})
app.get('/productDetail', (req, res) => {res.sendFile(path.join(__dirname, '/views/productDetail.html'))})