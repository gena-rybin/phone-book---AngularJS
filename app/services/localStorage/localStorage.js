'use strict';

app.service('localStorageService', function(loadFromJsonService, $q, $http) {
    var key = "task08LS"; // the name of our localStorage
    var data;
    return {
        write: function(value) {
            localStorage.setItem(key, angular.toJson(value)); //JSON.stringify
        },
        update: function(value) {
            data.forEach(function(item) {
                if(item.general.avatar === value.general.avatar){
                    return item = value;
                }
            });
            this.write(data);
        },
        getList: function() {
            var deferred = $q.defer();
            var obj = JSON.parse(localStorage.getItem(key));
            if(obj){
                data = obj;
                deferred.resolve(obj);
            } else {
                $http.get('json/clients.json').then(function (response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    data = response.data;
                    deferred.resolve(response.data);
                }).catch(function (response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    deferred.reject(response)
                });
            }
            return deferred.promise;
        },
        clear: function() {
            localStorage.clear();
            //location.reload();
            //return false;
        }
    }
})



// app.service('localStorageService', localStorageService);
//
// function localStorageService(){
//
//     var ls = localStorage;
//     var key = "task08LS"; // the name of our localStorage
//
//     return{
//         write: function (data){
//             ls.clear();
//             var addData = JSON.stringify(data); //сериализуем его
//             ls.setItem(key, addData); //запишем его в хранилище по ключу 'task03LS'
//             $window.localStorage.setItem(key,data);
//         }
//
//
//     }
//
//     // checking if localstorage(=LS) is empty. LS has a priority.
//     // var myLS = JSON.parse(localStorage.getItem(key));
//     // if (myLS) {
//     //     data = myLS;
//     // }
//     // console.log( myLS );
//
//
//

// }