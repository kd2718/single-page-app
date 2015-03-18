(function(){
	angular
        .module('basic-spa', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
      
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/templates/home.html",
                controller: "testController1",
            })
            .state('about', {
                url: "/about",
                templateUrl: "/templates/about.html",
                controller: "testController2",
            });

            $urlRouterProvider.otherwise("/home");
        });
})();

