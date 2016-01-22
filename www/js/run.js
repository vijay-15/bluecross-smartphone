'use strict';

/**
 * @ngdoc function
 * @name Blue Cross of India:Run
 * @author Raghav
 * @description
 * # Run
 * Contains the function to be run on ionic ready
 */

angular

.module('bluecross')

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar) {
	      StatusBar.styleDefault();
	    }
	});
})
