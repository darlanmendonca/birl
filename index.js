let IPod = require('ipod');
let audio = `${__dirname}/birl.mp3`;
let ipod = new IPod(audio);

module.exports = birl;

function birl() {
  ipod.play();
  ipod.on('playing', () => ipod.stop());
}

