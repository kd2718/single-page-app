(function(){
    function testController1($scope){
        $scope.items = [1, 2, 3, 4, 5]
    }

    function testController2($scope){
        $scope.items = [6, 7, 8, 9, 10]
    }

	angular
        .module('basic-spa')
        .controller('testController1', testController1)
        .controller('testController2', testController2);
})();