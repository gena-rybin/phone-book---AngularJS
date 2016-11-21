'use strict';

app.config(function($stateProvider) {
    $stateProvider
        .state("edit",{
            url: "/edit",
            controller: "editCtrl",
            templateUrl: "app/controllers/edit/edit.html",
            params: {item: null}
        })
});