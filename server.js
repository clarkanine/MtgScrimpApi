

var express = require('express'),
  app = express(),
  port = process.env.PORT || 4201,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  Player = require('./api/models/playerModel'), 
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
console.log(process.env.MONGOLAB_URI);
console.log(__dirname);
mongoose.connect('mongodb://localhost:27017/mtg-scrimp_db', function (error) {
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

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/MtgScrimpMat/index.html'));
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
