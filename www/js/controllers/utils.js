'use strict';

/**
 * @ngdoc function
 * @name Blue Cross of India:Utilities Controller
 * @author Raghav
 * @description
 * # Utilities Controller
 * Contains the controller for utility functions such as history, state changes
 */

angular

.module('bluecross.controllers')

.controller('utils', function($scope, $location, $ionicHistory){

	$scope.go = function ( path ) {
		console.log("GO")
	  if( path == 'back') {
	  	$ionicHistory.goBack();
	  }
	  else {
	  	$location.path( path );
	  }
	};
	
})