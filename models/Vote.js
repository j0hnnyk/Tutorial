"use strict";
var Vote = (function () {
    function Vote(lbl) {
        this.votes = 0;
        this.label = lbl;
    }
    return Vote;
}());
module.exports = Vote;
