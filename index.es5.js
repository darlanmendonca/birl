'use strict';

var IPod = require('ipod');
var audio = __dirname + '/birl.mp3';
var ipod = new IPod(audio);

module.exports = birl;

function birl() {
  ipod.play();
  ipod.on('playing', function () {
    return ipod.stop();
  });
}
