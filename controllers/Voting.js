"use strict";
var Vote = require('../models/vote');
var votes;
function init(options) {
    console.log("Initializing voting controller");
    votes = options.map(function (option) { return new Vote(option); });
}
exports.init = init;
function getTotalVotes() {
    var sum = 0;
    votes.forEach(function (vote) {
        sum += vote.votes;
    });
    return sum;
}
exports.getTotalVotes = getTotalVotes;
function vote(index) {
    var offset = 1;
    console.log("Voting for candidate: " + (Number(index) + offset));
    votes[index].votes++;
}
exports.vote = vote;
function getVotes() {
    console.log("Getting votes for all.");
    return votes;
}
exports.getVotes = getVotes;
