'use strict';

app.service('loadFromJsonService', loadFromJSON);

//doesn't work

function loadFromJSON($http, $q) {
    var data;
    return{
        getData: function () {
            var deferred = $q.defer();
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
            return deferred.promise;
        }
    }
}


// function loadFromJsonService() {
//     var clients = {};
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'json/clients.json', false);
//     xhr.send();
//     if (xhr.status != 200) {
//         // обработать ошибку
//         document.getElementById("info").innerHTML = xhr.status;
//     } else {
//         // вывести результат
//         clients = JSON.parse(xhr.responseText);
//         //clearData();
//         //selectData();
//     }
//     return clients;
// }

