'use strict';
module.exports = function(app) {
  var players = require('../controllers/playerController');

  app.route('/players')
    .get(players.list_all_players)
    .post(players.create_a_player)

    app.route('/players/:playerId')
    .get(players.list_all_players)
    .post(players.create_a_player)
    .delete(players.delete_a_player);
};