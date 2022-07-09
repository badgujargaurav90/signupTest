const bodyParser = require('body-parser');
var express = require('express');
require('dotenv').config()
var app = express();
var customerRoutes = require('./app/routes/customerRoutes');

app.use(bodyParser.json());
app.use('/signup/',customerRoutes);
app.use((req, res, next) => {
    next(createHttpError(404));
})

app.use((err, req, res, next) => {
    res.send(err);
});
var port = process.env.port || 3000;
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`));