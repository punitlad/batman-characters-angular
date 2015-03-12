var batmanCharacters = angular.module('batmanCharacters', ['ngRoute']);

batmanCharacters
.config(['$routeProvider', 
	function ($routeProvider) {
		$routeProvider
			.when('/character/:name',
			{
				templateUrl: "characterPage.html",
				controller: "characterController"
			})
			.when('/',
			{
				template: "hello"
				// templateUrl: "indexz.html",
				// controller: "charactersController"
			});
		}])
.run(['$anchorScroll', 
	function($anchorScroll) {
		$anchorScroll.yOffset = 50; 
	}])	
.controller('charactersController', ['$scope', '$http', '$location', '$anchorScroll',
    function($scope, $http, $location, $anchorScroll) {
        $http.get('characters.json').success( function(data) {
            $scope.characters = data
        });

        $scope.jumpToId = function(id) {
        	$location.hash(id);
        	$anchorScroll();
        };
    }])
.controller('characterController', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$http.get('characters.json').success( function(data) {
        	for(var i=0; i<data.length; i++) {
        		if (data[i].characterName == $routeParams.name) {
        			$scope.character = data[i];
        			break;
        		}
        	}
        });
	}])
;