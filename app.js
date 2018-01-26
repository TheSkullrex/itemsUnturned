var express = require('express')
var items = require('./items.js')

var app = express()

app.get('/', function(req, res) {
    res.render('items.ejs', {data:items});
});

app.listen(3000)