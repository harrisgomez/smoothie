console.log('Associates Factory loaded');

app.factory('associatesFactory', ['$http', function($http) {
    var factory = {};

    // factory.index = function(id, callback){
    //     $http.get(`/users/${id}`).then(function(returned_data){
    //         callback(returned_data.data);
    //     })
    // }

    factory.login = function(employee_id, callback){
        $http.post('/login', employee_id).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    // factory.register = function(user, callback){
    //     $http.post('/register', user).then(function(returned_data){
    //         callback(returned_data.data);
    //     })
    // }

    return factory;
}])
