app.controller('associate_login_Controller', ['$scope', '$location', '$cookies', 'associatesFactory', function($scope, $location, $cookies, associatesFactory){
    $scope.associate = {};

    $scope.login = function(){
        associatesFactory.login($scope.associate, function(returned_data){
            if('error' in returned_data){
                $scope.errors = returned_data.error;
            }else{
                $location.url('/master_cards');
            }
        })
    }

    $scope.back = function(){
        $location.url('/');
    }
}])
