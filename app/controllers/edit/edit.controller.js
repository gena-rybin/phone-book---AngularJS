'use strict';

app.controller('editCtrl', function($scope, $state, $stateParams, loadFromJsonService, localStorageService) {
    $scope.users = loadFromJsonService;
    $scope.index = $stateParams.item.index;
    $scope.user = $stateParams.item.user;
    // $scope.getData = getData;
    //
    // function getData () {
    //     console.log(someService.getItem());
    // }

    $scope.functionGoToMainPage = functionGoToMainPage;
    function functionGoToMainPage () {
        $state.go('main');
    }

    var temp = [];

    $scope.functionShowData = functionShowData;
    function functionShowData () {
        localStorageService.update($scope.user);
        // if("$$hashKey" in $scope.user) {
        //     delete $scope.user.$$hashKey;
        // }
        console.log($scope.user);
        // console.log($scope.users);
    }


});