'use strict';

/**
 * @ngdoc function
 * @name Blue Cross of India:Ambulance Controller
 * @author Raghav
 * @description
 * # Ambulance Controller
 * Contains the controller for ambulance view of the app
 */

angular

.module('bluecross.controllers')

.controller('ambulanceController', function($scope, $state, $ionicLoading, AmbulanceService){
	
	$scope.vehicle = [];

	AmbulanceService.getAmbulance().then(function(response){
		$scope.vehicle = response.data;
	})

	// Hide the loader
	$ionicLoading.hide();
})