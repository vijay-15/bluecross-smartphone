'use strict';

/**
 * @ngdoc function
 * @name Blue Cross of India:Routes
 * @author Raghav
 * @description
 * # Routes
 * Contains the URL and states routes for the Blue Cross of India app
 */

angular

.module('bluecross')

.config(function($stateProvider, $urlRouterProvider) {
	
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })


            .state('ambulance_assigned', {
                url: '/ambulance_assigned',
                templateUrl: 'views/ambulance_assigned.html',
                controller : 'ambulanceController'
            })

            .state('ambulance_not_assigned', {
                url: '/ambulance_not_assigned',
                templateUrl: 'views/ambulance_not_assigned.html',
                controller: 'ambulanceController'
            })


            .state('volunteer',{
                url: '/volunteer',
                templateUrl: 'views/volunteer.html',
                controller: 'volunteerController'
            })

            .state('donate',{
                url: '/donate',
                templateUrl: 'views/donate.html'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact_us.html'
            })
            .state('complaint', {
                url: '/complaint',
                templateUrl: 'views/complaint.html'
            })
            .state('user', {
                url: '/user_profile',
                templateUrl: 'views/user.html'
            })
        $urlRouterProvider.otherwise("/home");

})


