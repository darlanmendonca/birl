'use strict';

const player = require('play-sound')();
const audio = `${__dirname}/birl.mp3`;

module.exports = birl;

function birl() {
  player.play(audio);
}

