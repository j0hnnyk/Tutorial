/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

import voting = require('../controllers/voting');

describe('my app tests', () => {
    it('should be able to init app', () => {
        // arrange
        var options = ['Hillary', 'The Donald', 'Teddy'];
        
        // act
        voting.init(options);
    })
})