'use strict';

var IPod = require('ipod');
var audio = __dirname + '/birl.mp3';
var ipod = new IPod(audio);

function birl() {
	ipod.play();
	ipod.on('playing', function() {
		ipod.stop();
	});
}

module.exports = birl;