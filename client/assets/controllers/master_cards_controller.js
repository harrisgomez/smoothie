app.controller('master_cards_Controller', ['$location', '$scope','membersFactory', function($location, $scope, membersFactory){
    $scope.getMembers = function(){
        membersFactory.index(function(returned_data){
            $scope.members = returned_data;
        })
    }

    $scope.getMembers();

    $scope.member = {};
    $scope.create = function(){
        membersFactory.create($scope.member, function(returned_data){
            $scope.getMembers();
            $scope.member = {};
        })
    }

    $scope.profile = function(id){
        $location.url(`/member/${id}`);
    }
}])
