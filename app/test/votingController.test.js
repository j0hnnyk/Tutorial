/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../votingController.ts" />
describe('VotingController', function () {
    var $rootScope;
    var scope;
    var $httpBackend;
    var voteUrl = '/api/vote';
    var getVotesUrl = '/api/getVotes';
    var ctrl = null;
    beforeEach(angular.mock.module('voting'));
    beforeEach(inject(function (_$httpBackend_, $rootScope) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
    }));
    it('should get votes', inject(function ($controller) {
        // arrange
        var expectedResult = [{ label: "Hillary", votes: 1 }, { label: "The Donald", votes: 0 }, { label: "Teddy", votes: 0 }];
        $httpBackend
            .expectGET(getVotesUrl)
            .respond(200, expectedResult);
        // act
        ctrl = $controller('votingController', {
            $scope: scope
        });
        $httpBackend.flush();
        // assert
        console.log('should get votes');
        console.log("ctrl votes " + ctrl.scope['votes'][0].votes + " equals " + 1);
        expect(ctrl.scope['votes'][0].votes).toEqual(1);
    }));
});
