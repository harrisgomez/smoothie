console.log("Punches Factory Loaded");

app.factory('punchesFactory', ['$http', function($http){
    var factory = {};

    factory.create = function(id, callback){
        $http.post(`/punch/add/${id}`).then(function(returned_data){
            callback(returned_data.data);
        })
    }

    factory.delete = function(id, callback){
        console.log(id);
        $http.post(`/punch/delete/${id}`).then(function(returned_data){
            console.log('front factory data', returned_data);
            callback(returned_data.data);
        })
    }

    return factory;
}])
