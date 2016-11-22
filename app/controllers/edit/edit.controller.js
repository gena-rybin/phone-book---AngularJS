'use strict';

app.controller('editCtrl', function($scope, $state, $stateParams, loadFromJsonService, localStorageService) {
    $scope.users = loadFromJsonService;
    $scope.index = $stateParams.item.index;
    $scope.user = $stateParams.item.user;

    $scope.functionGoToMainPage = functionGoToMainPage;
    function functionGoToMainPage () {
        $state.go('main');
    }

    $scope.functionChangeUserData = functionChangeUserData;
    function functionChangeUserData () {
        localStorageService.update($scope.user);
        // if("$$hashKey" in $scope.user) {
        //     delete $scope.user.$$hashKey;
        // }
        console.log($scope.user);
        // console.log($scope.users);
    }


});