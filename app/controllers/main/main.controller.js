'use strict';

app.controller('phoneBookCtrl', function ($scope, loadFromJSON) {
    $scope.data = loadFromJSON;
    console.log($scope.data);

    $scope.clickedUser = clickedUser;
    function clickedUser(user) {
        console.log(user);
    }
});