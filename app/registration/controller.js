'use strict';

angular.module('myApp.registration', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/registration', {
        templateUrl: 'registration/view.html',
        controller: 'RegistrationCtrl'
    });
}])
/*
.directive("datepicker", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, elem, attrs, ngModelCtrl) {
            var updateModel = function(dateText) {
                scope.$apply(function() {
                    ngModelCtrl.$setViewValue(dateText);
                });
            };
            var options = {
                dateFormat: "dd/mm/yy",
                onSelect: function(dateText) {
                    updateModel(dateText);
                }
            };
            elem.datepicker(options);
        }
    }
})*/
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

    $scope.resetForm = function() {
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
    };

    $scope.submitForm = function(valid) {
        $scope.submitted = true;
        if (valid) {

        }
        console.log($scope.user);
    };
    //$('.datepicker').datepicker();
});
