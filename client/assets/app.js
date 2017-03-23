var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'static/partials/menu.html',
        controller: 'menuController'
    })
    .when('/associate_login', {
        templateUrl: 'static/partials/associate_login.html',
        controller: 'associate_login_Controller'
    })
    .when('/member_option', {
        templateUrl: 'static/partials/member_option.html',
        controller: 'member_option_Controller'
    })
})
