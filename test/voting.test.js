/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
"use strict";
var chai = require('chai');
var expect = chai.expect;
var voting = require('../controllers/voting');
describe('my app tests', function () {
    it('should be able to init app', function () {
        // arrange
        var options = ['Hillary', 'The Donald', 'Teddy'];
        // act
        voting.init(options);
    });
});
