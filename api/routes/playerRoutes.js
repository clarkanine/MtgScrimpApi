'use strict';
module.exports = function(app) {
  var players = require('../controllers/playerController');

  app.route('/players')
    // .get(players.list_all_players)
    .get(players.list_all_players)
    .post(players.create_a_player)
    .put(players.update_player)

    app.route('/players/:userId')
    .get(players.list_all_players_for_user)
    .post(players.create_a_player)
    .delete(players.delete_a_player);
};