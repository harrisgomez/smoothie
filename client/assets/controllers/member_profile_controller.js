app.controller('member_profile_Controller', ['$routeParams', '$scope', 'membersFactory', 'punchesFactory', function($routeParams, $scope, membersFactory, punchesFactory){
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
}])
