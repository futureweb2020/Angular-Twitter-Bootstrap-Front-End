'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/view.html',
        controller: 'LoginCtrl'
    });
}])

.controller('LoginCtrl', function($scope) {
	 
    $scope.user = {
    	guild: '',
    	pin: ''
    };

    $scope.login = function(valid) {
         
    };
    
});
