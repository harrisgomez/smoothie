console.log("Punches Factory Loaded");

app.factory('punchesFactory', ['$http', function($http){
    var factory = {};

    factory.create = function(id, callback){
        $http.post(`/punch/${id}`).then(function(returned_data){
            console.log('front factory data', returned_data);
            callback(returned_data.data);
        })
    }

    return factory;
}])
