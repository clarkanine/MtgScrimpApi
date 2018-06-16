
'use strict';
var contentDisposition = require('content-disposition');

var mongoose = require('mongoose'),


Player = mongoose.model('players');
var ObjectId = require('mongodb').ObjectID;

exports.list_all_players = function(req, res) {
    console.log('getting players');

    Player.find({}, '-__v', function(err, player) {
      if (err)
        res.send(err);

      res.setHeader('Access-Control-Allow-Origin', 'https://stark-headland-48165.herokuapp.com');
      res.json(player);
    });
  };

  exports.list_all_players_for_user = function(req, res) {
    console.log('getting players for user' + req.params.userId);

    Player.find({userIdentifier: req.params.userId}, '-__v', function(err, player) {
      if (err)
        res.send(err);

      // console.log(player);
      res.setHeader('Access-Control-Allow-Origin', 'https://stark-headland-48165.herokuapp.com');
      res.json(player);
    });
  };

  exports.create_a_player = function(req, res) {
    delete req.body._id;
    var new_player = new Player(req.body);
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

  exports.update_player = function(req, res) {
    var new_player = new Player(req.body);
    // delete new_player._id;
    console.log('updating this guy');
    console.log(new_player);
    console.log(new_player._id);
    Player.updateOne({_id: new_player._id}, new_player, function(err, player) {
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