'use strict';

app.controller('phoneBookCtrl', function ($scope,
                                          $state,
                                          loadFromJsonService, localStorageService) {

  //  $scope.writeLS = localStorageService.write;

    $scope.getLS = localStorageService.getObj();

    // if localStorage is full - take data from it
    // if localStorage is empty - take data from json
    loadFromJsonService.getData().then(function (res) {
        if ($scope.getLS) {
            console.log('full ls');
            $scope.users = $scope.getLS;
            return;
        }
        //localStorageService.write(555);
        console.log('empty ls');
        $scope.users = res;
        localStorageService.write(res);
    });

    $scope.clearLS = localStorageService.clear;

    $scope.functionGoToEditePage = functionGoToEditePage;

    function functionGoToEditePage (user, index) {
        console.log(user +'  '+ index);
        $state.go('edit', {item:{user: user, index: index}});
    }



});
