(function(){
    function testController1($scope){
        $scope.items = [1, 2, 3, 4, 5]
    }

    function loginController($scope){
        $scope.username = '';
        $scope.password = '';


        $scope.login = function(){
            // console.log(loginForm.input.$valid);
            // Send $scope.username and $scope.password to API here
            // In the success of the AJAZ request change pages here
        }
    }

    function blogController($scope, $stateParams){
        $scope.blogId = $stateParams.blogId;
    }

	angular
        .module('basic-spa')
        .controller('testController1', testController1)
        .controller('loginController', loginController)
        .controller('blogController', blogController);
})();