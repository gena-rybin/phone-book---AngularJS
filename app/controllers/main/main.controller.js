'use strict';

app.controller('phoneBookCtrl', function ($scope, $state, loadFromJsonService) {

    $scope.users = loadFromJsonService;

   // $scope.data = loadFromJSON.getData;  //doesn't work

    $scope.functionGoToEditePage = functionGoToEditePage;

    function functionGoToEditePage (user, index) {
        console.log(user +'  '+ index);
        $state.go('edit', {item:{user: user, index: index}});
    }


});
