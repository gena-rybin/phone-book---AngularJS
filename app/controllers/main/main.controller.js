'use strict';

app.controller('phoneBookCtrl', function ($scope,
                                          $state,
                                          loadFromJsonService, localStorageService) {

  //  $scope.writeLS = localStorageService.write;


    localStorageService.getList().then(function(res){
        $scope.filtered = res;
        $scope.users = res;
        usersClon = res;
    });

    // if localStorage is full - take data from it
    // if localStorage is empty - take data from json
    // loadFromJsonService.getData().then(function (res) {
    //     if ($scope.getLS) {
    //         console.log('full ls');
    //         $scope.users = $scope.getLS;
    //         return;
    //     }
    //     //localStorageService.write(555);
    //     console.log('empty ls');
    //     $scope.users = res;
    //     localStorageService.write(res);
    // });

    $scope.clearLS = localStorageService.clear;

    $scope.filtered;
    var usersClon;
    $scope.functionFindByName = functionFindByName;
    function functionFindByName () {
        $scope.filtered = usersClon;
        if ($scope.inpName) {
            $scope.filtered = usersClon.filter(function (user) {
                return user.general.firstName.toLowerCase().match($scope.inpName);
            });
        }
    }

    $scope.functionGoToEditePage = functionGoToEditePage;

    function functionGoToEditePage (user) {
        console.log(user);
        $state.go('edit', {item:{user: user}});
    }


});
