'use strict';

var IPod = require('ipod');
var audio = './birl.mp3';
var ipod = new IPod(audio);

ipod.on('playing', function() {
	ipod.stop();
});

module.exports = function() {
	ipod.play();
};