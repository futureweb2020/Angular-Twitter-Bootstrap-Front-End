'use strict';

angular.module('myApp.registration', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/registration', {
        templateUrl: 'registration/view.html',
        controller: 'RegistrationCtrl'
    });
}])
.controller('RegistrationCtrl', function($scope) {
    $scope.user = {
        country_code: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        birth_day: '',
        email: '',
        pin: '',
        phone: ''
    };
    $scope.submitted = false;
    $scope.emptyPhoneEmail = false;
    $scope.resetForm = function($event) {
        $scope.submitted = false;
        $scope.user = {
            country_code: '',
            first_name: '',
            middle_name: '',
            last_name: '',
            birth_day: '',
            email: '',
            pin: '',
            phone: ''
        };
        $event.preventDefault();
    };

    $scope.submitForm = function(valid) {
        $scope.submitted = true;
        if (valid) {

        }
        console.log($scope.user);
    };
    
});
