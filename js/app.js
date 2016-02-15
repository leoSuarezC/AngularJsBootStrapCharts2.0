angular.module('spaApp', ['ngRoute','chart.js'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider //add resolve function is pending.
        .when('/', {
            templateUrl: 'Home.html',
            controller: 'HomeCtrl',

        })
        .when('/perfil', {
            templateUrl: 'Profile.html',
            controller: 'PerfilCtrl',
        })
        .when('/mensajes', {
            templateUrl: 'Messages.html',
            controller: 'MensajesCtrl',
        })
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'LoginCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
}])