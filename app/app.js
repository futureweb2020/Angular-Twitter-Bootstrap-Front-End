'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.login',
    'myApp.registration',
    'myApp.version',
    'ngMessages',
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ui.date'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/login' });
}]);
