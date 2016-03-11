/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../votingController.ts" />
describe('VotingController', function () {
    var $rootScope: ng.IScope;
    var scope: ng.IScope;
    var $httpBackend: ng.IHttpBackendService;
    var voteUrl = '/api/vote';
    var getVotesUrl = '/api/getVotes';
    var ctrl: any = null;
    beforeEach(angular.mock.module('voting'));
    beforeEach(inject(function (_$httpBackend_: ng.IHttpBackendService, $rootScope: ng.IScope) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
    }));
    it('should get votes', inject(function ($controller: ng.IControllerService) {
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
        console.log('should get votes ready');
        console.log("ctrl votes " + ctrl.scope['votes'][0].votes + " equals " + 1);
        expect(ctrl.scope['votes'][0].votes).toEqual(1);
    }));
    
    it('should be able to vote', inject(function ($controller: ng.IControllerService) {
        // arrange
        $httpBackend
            .expectGET(getVotesUrl)
            .respond(200, [{ label: "Hillary", votes: 0 }, { label: "The Donald", votes: 0 }, { label: "Teddy", votes: 0 }]);
        ctrl = $controller('votingController', {
            $scope: scope
        });

        var expectedResult = [{ label: "Hillary", votes: 1 }, { label: "The Donald", votes: 0 }, { label: "Teddy", votes: 0 }];
        
        $httpBackend
            .expectPOST(voteUrl +'/0')
            .respond(200, expectedResult)

        // act
        ctrl.vote(0);
        $httpBackend.flush();
        // assert
        console.log('should do vote ready');
        console.log("ctrl votes " + ctrl.scope['votes'][0].votes + " equals " + 1);
        expect(ctrl.scope['votes'][0].votes).toEqual(1);
    }));
    
});
