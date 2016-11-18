'use strict';

app.controller('phoneBookCtrl', function ($scope,
                                          $state,
                                          loadFromJsonService) {

  //  $scope.writeLS = localStorageService.write;

    loadFromJsonService.getData().then(function (res) {
        $scope.users = res;
        console.log($scope.users);
    });  //doesn't work


    $scope.functionGoToEditePage = functionGoToEditePage;

    function functionGoToEditePage (user, index) {
        console.log(user +'  '+ index);
        $state.go('edit', {item:{user: user, index: index}});
    }



});
