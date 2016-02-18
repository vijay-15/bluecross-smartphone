	'use strict';

	/**
	 * @ngdoc function
	 * @name bluecross.service:ComplaintService
	 * @description
	 * # ComplaintService
	 * Service for handling complaints of the bluecross app
	 */

	angular

	.module('bluecross.services')

	.factory('AmbulanceService', AmbulanceService);

	AmbulanceService.$inject = ['$cordovaLocalStorage','$http'];

	function AmbulanceService ($cordovaLocalStorage, $http) {

		var ambulance = {
			getAmbulance : getAmbulance
		};

		return ambulance;

		function getAmbulance() {
			return $http({
	            method: 'GET',
	            url: config.URL + '/ambulance/getAllAmbulance',
	        })
	    }

	}