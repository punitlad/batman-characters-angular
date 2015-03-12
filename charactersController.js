var batmanCharacters = angular.module('batmanCharacters', []);

batmanCharacters.controller('charactersController', ['$scope', 
    function($scope) {
        $scope.characters = ["joker", "batman"];
    }
]);
