(function(){
	angular
        .module('basic-spa', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
      
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "/templates/home.html",
                controller: "testController1",
            })
            .state('about', {
                url: "/about",
                templateUrl: "/templates/about.html",
                controller: "testController1",
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "/templates/contact.html",
                controller: "testController1",
            })
            .state('blog', {
                url: "/blog/{blogId:int}",
                templateUrl: "/templates/blog.html",
                controller: "blogController",
            })
            .state('404', {
                url: "/404",
                templateUrl: "/templates/404.html",
                controller: "testController1",
            });

            $urlRouterProvider.otherwise("/404");
        });
})();

// This is not the jQuery you are looking for move along
$(document).ready(function(){
    $('.button-collapse').sideNav();
})
