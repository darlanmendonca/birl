let player = require('play-sound')();
let audio = `${__dirname}/birl.mp3`;

module.exports = birl;

function birl() {
  player.play(audio);
}

