app.controller('associate_login_Controller', ['$scope', '$location', '$cookies', 'associatesFactory', function($scope, $location, $cookies, associatesFactory){
    $scope.associate = {};

    $scope.login = function(){
        console.log($scope.associate);
        associatesFactory.login($scope.associate, function(returned_data){
            console.log("front end controller", returned_data);
        })
    }
}])
