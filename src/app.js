const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require("./routes/mainRouter.js");
const usersRouter = require('./routes/usersRouter.js');
const productsRouter = require('./routes/productsRouter.js');

app.use(express.static(path.join(__dirname,'../public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/', mainRouter);

app.listen(3000, () => {console.log("Server running in http://localhost:3000")});