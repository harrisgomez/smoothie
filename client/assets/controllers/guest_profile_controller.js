app.controller('guest_profile_Controller', ['$location', '$scope', '$routeParams', 'membersFactory', function($location, $scope, $routeParams, membersFactory){
    $scope.getMember = function(){
        membersFactory.show($routeParams.id, function(returned_data){
            $scope.member = returned_data;
        })
    }
    $scope.getMember();

    $scope.back = function(){
        $location.url("/member_lookup");
    }
}])
