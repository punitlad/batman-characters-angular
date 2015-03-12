var batmanCharacters = angular.module('batmanCharacters', []);

batmanCharacters.controller('charactersController', ['$scope', 
    function($scope) {
        var joker = {
                    "characterName": "Joker", 
                    "realName": "Unknown",
                    "description": "The Joker is a fictional supervillain who appears in American comic books published by DC Comics. The character was created by Jerry Robinson, Bill Finger, and Bob Kane, and first appeared in Batman #1 (April 25, 1940).",
                    "link": "http://en.wikipedia.org/wiki/Joker_(comics)",
                    "image": "http://www.camelcitydispatch.com/wp-content/uploads/2012/11/joker-comics-b.png"
                    }
        var batman = {
                    "characterName": "Batman",
                    "realName": "Bruce Wayne",
                    "description": "Batman is a fictional superhero who appears in American comic books published by DC Comics, as well as its associated media. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27 (May 1939). Originally named 'the Bat-Man', the character is also referred to by such epithets as 'the Caped Crusader','the Dark Knight', and 'the Worlds Greatest Detective'.",
                    "link": "http://en.wikipedia.org/wiki/Batman",
                    "image": "http://www.minieden.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/batman2.jpg"
                    }

        $scope.characters = [joker, batman];
    }
]);
