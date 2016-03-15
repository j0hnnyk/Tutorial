/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts" />
/// <reference path="typings/body-parser/body-parser.d.ts" />

import express = require('express');
import http = require('http');
import path = require('path');
import Vote = require('./models/Vote');
import voting = require('./controllers/Voting');
import bodyParser = require('body-parser');

var app = express();
app.set('port', process.env.PORT || 3000);

// parsing req/res
app.use(bodyParser.urlencoded({extended: false}));  // parse application/x
app.use(bodyParser.json());  // parse application/json

// set static directory
app.use(express.static(path.join(__dirname, 'public')));

// routes
var router = express.Router();

router.get('/api/getVotes', function (req,res){
    console.log("Calling api/getVotes");
    res.send(voting.getVotes());
});

router.post('/api/vote/:index', function (req,res){
    console.log("Calling api/vote with index: " + req.params.index);
    voting.vote(req.params.index);
    res.send(voting.getVotes());
});

app.use('/', router);

// run app
var server = app.listen(app.get('port'), function () {
    voting.init(['Hillary', 'The Donald','Teddy']);
    console.log('Express server listening on port ' + server.address().port);
});

/*

// 3/11/16  I had to comment out several lines in jasmine.d.ts as "duplicate" entries???

//declare function describe(description: string, specDefinitions: () => void): void;
declare function fdescribe(description: string, specDefinitions: () => void): void;
//declare function xdescribe(description: string, specDefinitions: () => void): void;

//declare function it(expectation: string, assertion?: () => void, timeout?: number): void;
//declare function it(expectation: string, assertion?: (done: () => void) => void, timeout?: number): void;
declare function fit(expectation: string, assertion?: () => void, timeout?: number): void;
declare function fit(expectation: string, assertion?: (done: () => void) => void, timeout?: number): void;
//declare function xit(expectation: string, assertion?: () => void, timeout?: number): void;
//declare function xit(expectation: string, assertion?: (done: () => void) => void, timeout?: number): void;

*/