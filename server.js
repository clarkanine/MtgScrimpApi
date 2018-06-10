

var express = require('express'),
  app = express(),
  port = process.env.PORT || 4201,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  Player = require('./api/models/playerModel'), 
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
console.log(process.env.MONGODB_URI);
console.log(__dirname);
var mongoDb = 'mongodb://localhost:27017/mtg-scrimp_db';
mongoose.connect('mongodb+srv://aaronclark:AkindOFmagic-1@scrimp-oumch.mongodb.net/test?retryWrites=true', function (error) {
  if (error) 
  {
    console.error(error);
    console.log('Could not connect to ' + mongoDb); 
  }
  else console.log('mongo connected');
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/playerRoutes'); //importing route
// var routes = require('./api/modules.js'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
        // Website you wish to allow to connect
        console.log("setting Access-Control-Allow-Origin headers");
        res.setHeader('Access-Control-Allow-Origin', 'https://stark-headland-48165.herokuapp.com/');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        res.status(404).send({url: req.originalUrl + ' not found'})
        // Pass to next layer of middleware
        next();
  });
