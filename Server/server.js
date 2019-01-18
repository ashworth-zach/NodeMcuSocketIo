var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());


app.use(express.static( __dirname + '/public/dist/public' ));

app.set('view engine', 'ejs');
app.set('trust proxy', 1) // trust first proxy

require('./server/config/routes.js')(app);
app.listen(8000, function () {
    console.log("listening on port 8000");
})