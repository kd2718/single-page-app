(function(){
	function loginForm(){
		var directive = {
			restrict: 'E',
			templateUrl: '/templates/login.html',
			controller: 'loginController',
		};
		return directive;
	};

	angular
		.module('basic-spa')
		.directive('loginForm', loginForm);
})();