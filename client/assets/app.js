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
    .when('/master_cards', {
        templateUrl: 'static/partials/master_cards.html',
        controller: 'master_cards_Controller'
    })
    .when('/member/:id', {
        templateUrl: 'static/partials/member_profile.html',
        controller: 'member_profile_Controller'
    })
    .when('/member_lookup', {
        templateUrl: '/static/partials/member_lookup.html',
        controller: 'member_lookup_Controller'
    })
    .when('/guest_profile/:id', {
        templateUrl: '/static/partials/guest_profile.html',
        controller: 'guest_profile_Controller'
    })
})
