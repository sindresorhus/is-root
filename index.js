'use strict';

var os = require('os');

module.exports = function (callback) {
	if (os.platform() === 'win32') {
		var wincmd = require('node-windows');
		wincmd.isAdminUser(callback);
	} else {
		callback(process.getuid && process.getuid() === 0);
	}
};
