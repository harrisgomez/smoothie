console.log("Members Factory Loaded");

app.factory('membersFactory', ['$http', function($http) {
    var factory = {};

    factory.index = function(callback){
        $http.get('/members').then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.create = function(member, callback){
        $http.post('/members/new', member).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.show = function(id, callback){
        $http.get(`/members/${id}`).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    return factory;
}])
