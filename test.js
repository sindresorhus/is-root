'use strict';
var assert = require('assert');
var proxyquire = require('proxyquire');
var os = require('os');

var isAdminUser = true;

var nodeWindowsStub = {
	isAdminUser: function (callback) {
		callback(isAdminUser)
	}
};

var isRoot = proxyquire('./', {
	'node-windows': nodeWindowsStub
});

describe('given platform is not win32', function () {

	beforeEach(function () {
		os.platform = function() {
			return 'darwin';
		};
	});

	it('should return true if uid is 0', function (done) {
		process.getuid = function () {
			return 0;
		};

		isRoot(function (result) {
			assert(result);
			done();
		});
	});

	it('should return false if uid is not 0', function (done) {
		process.getuid = function () {
			return 1000;
		};

		isRoot(function (result) {
			assert(!result);
			done();
		});
	});

});

describe('given platform is win32', function () {

	beforeEach(function () {
		os.platform = function() {
			return 'win32';
		};
	});

	describe('given isAdminUser() yields true', function () {

		beforeEach(function () {
			isAdminUser = true;
		});

		it('should return true', function (done) {
			isRoot(function (result) {
				assert(result);
				done();
			});
		});

	});

	describe('given isAdminUser() yields false', function () {

		beforeEach(function () {
			isAdminUser = false;
		});

		it('should return false', function (done) {
			isRoot(function (result) {
				assert(!result);
				done();
			});
		});

	});

});
