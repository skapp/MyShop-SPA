// modules =================================================
var compression = require('compression');
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
app.use(compression());

var port = process.env.Port || 8080;


// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/back-end/index.html'));

// routes ==================================================
require(__dirname + '/back-end/routes')(app); // configure our routes
require(__dirname + '/back-end/api/customer.api')(app); // configure our customer api
require(__dirname + '/back-end/api/product.api')(app); // configure our product api
require(__dirname + '/back-end/api/vendor.api')(app); // configure our vendor api
require(__dirname + '/back-end/api/sales.api')(app); // configure our sales api

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user                     
console.log('MyShopApp running on port :' + port);

// expose app           
exports = module.exports = app;