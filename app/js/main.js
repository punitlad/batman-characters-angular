(function () {

'use strict';

angular.module('BatmanCharactersApp', ['ngRoute'])
.config(['$routeProvider', 
	function ($routeProvider) {
		$routeProvider
			.when('/',
			{
				templateUrl: "./partials/characterList.html",
				controller: "CharactersController"
			})
			.when('/character/:name',
			{
				templateUrl: "./partials/characterPage.html",
				controller: "CharacterController"
			});
		}]);

angular.module('BatmanCharactersApp')
.run(['$anchorScroll', 
	function($anchorScroll) {
		$anchorScroll.yOffset = 50; 
	}])	
.controller('CharactersController', ['$scope', '$http', '$location', '$anchorScroll',
    function($scope, $http, $location, $anchorScroll) {
        $http.get('characters.json').success( function(data) {
            $scope.characters = data
        });

        $scope.jumpToId = function(id) {
        	$location.hash(id);
        	$anchorScroll();
        };
    }])
.controller('CharacterController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$http.get('characters.json').success( function(data) {
        	for(var i=0; i<data.length; i++) {
        		if (data[i].characterName == $routeParams.name) {
        			$scope.character = data[i];
        			break;
        		}
        	}
        });
	}]);

}());
