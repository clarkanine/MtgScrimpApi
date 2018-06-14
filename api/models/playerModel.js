
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    userIdentifier: {
        type: String,
        required: ''
      },
    name: {
      type: String,
      required: ''
    },
    deck: {
        type: String,
        required: ''
    },
    wins: {
        type: Number,
        required: ''
    },
    losses: {
        type: Number,
        required: ''
    },
    draws: {
        type: Number,
        required: ''
    },
    matches: {
        type: Array
    }
  });

module.exports = mongoose.model('players', PlayerSchema);