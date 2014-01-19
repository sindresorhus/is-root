'use strict';
var assert = require('assert');
var isRoot = require('./index');

it('should return true if root', function () {
	process.getuid = function () {
		return 0;
	};

	assert(isRoot());
});

it('should return false if not root', function () {
	process.getuid = function () {
		return 1000;
	};

	assert(!isRoot());
});
