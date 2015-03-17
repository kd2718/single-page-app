(function(){
    function testController(){

    };

	angular
        .module('basic-spa', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
      
            $stateProvider
            .state('index', {
                url: "/test1",
                templateUrl: "/templates/test1.html",
                controller: "testController",
            })
            .state('test', {
                url: "/test2",
                templateUrl: "/templates/test2.html",
                controller: "testController",
            });

            $urlRouterProvider.otherwise("/test1");
        })
        .controller('testController', testController);
})();