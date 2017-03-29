app.controller('member_lookup_Controller', ['$location', '$scope', '$routeParams', 'membersFactory', function($location, $scope, $routeParams, membersFactory){
    $scope.getMembers = function(){
        membersFactory.index(function(returned_data){
            $scope.members = returned_data;
        })
    }

    $scope.getMembers();

    $scope.guest_profile = function(id){
        $location.url(`/guest_profile/${id}`);
    }

    $scope.back = function(){
        $location.url("/");
    }
}])
