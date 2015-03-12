var batmanCharacters = angular.module('batmanCharacters', []);

batmanCharacters.controller('charactersController', ['$scope', '$http', 
    function($scope, $http) {

        $http.get('characters.json').success( function(data) {
            $scope.characters = data
        });
    }
]);
