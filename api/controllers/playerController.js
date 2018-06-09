
'use strict';
var contentDisposition = require('content-disposition');

var mongoose = require('mongoose'),

Player = mongoose.model('Players');

exports.list_all_players = function(req, res) {
    console.log('getting players');
    Player.find({}, '-__v', function(err, player) {
      if (err)
        res.send(err);
        res.setHeader('Content-Disposition', contentDisposition('test'));
      res.json(player);
    });
  };

  exports.create_a_player = function(req, res) {
    delete req.body._id;
    var new_player = new Player(req.body);
    // delete new_player._id;
    console.log('creating this guy');
    console.log(new_player);
    new_player.save(function(err, player) {
      if (err)
      {
        console.log(err);
        res.send(err);
        console.log(new_player);
      }
       
      res.json(player);
    });
  };

  exports.delete_a_player = function(req, res) {
    Player.remove({
      _id: new ObjectId(req.params.playerId)
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };