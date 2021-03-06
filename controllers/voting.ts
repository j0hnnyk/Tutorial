import Vote = require('../models/vote');

var votes: Array<Vote>;

export function init(options: string[]): void {
    console.log("Initializing voting controller");
    votes = options.map(option => new Vote(option));
}

export function getTotalVotes(): number{
    var sum = 0;
    votes.forEach(vote => {
        sum += vote.votes;
    });
    return sum;
}

export function vote(index: number) : void {
    var offset = 1;
    console.log("Voting for candidate: " + (Number(index) + offset));
    votes[index].votes++;
}

export function getVotes(): Array<Vote> {
    console.log("Getting votes for all.");
    return votes;
}