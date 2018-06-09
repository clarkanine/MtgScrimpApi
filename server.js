

var express = require('express'),
  app = express(),
  port = process.env.PORT || 4201,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  Player = require('./api/models/playerModel'), 
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI, function (error) {
  if (error) console.error(error);
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
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
