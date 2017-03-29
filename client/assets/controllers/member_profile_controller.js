app.controller('member_profile_Controller', ['$location', '$routeParams', '$scope', 'membersFactory', 'punchesFactory', function($location, $routeParams, $scope, membersFactory, punchesFactory){
    $scope.getMember = function(){
        membersFactory.show($routeParams.id, function(returned_data){
            $scope.member = returned_data;
        })
    }
    $scope.getMember();

    $scope.add_punch = function(id){
        punchesFactory.create(id, function(returned_data){
            console.log(returned_data.message);
            $scope.getMember();
        })
    }

    $scope.subtract_punch = function(id){
        punchesFactory.delete(id, function(returned_data){
            console.log(returned_data.message);
            $scope.getMember();
        })
    }

    $scope.back = function(){
        $location.url('/master_cards');
    }

    $scope.delete_member = function(id){
        membersFactory.delete(id, function(returned_data){
            console.log(returned_data.message);
            $location.url('/master_cards');
        })
    }
}])
