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

	.factory('ComplaintService', complaintService);

	complaintService.$inject = ['$cordovaLocalStorage','$http'];

	function complaintService ($cordovaLocalStorage, $http) {

		var complaint = {
			getComplaints : getComplaints
		};

		return complaint;

		function getComplaints() {
			return $http({
	            method: 'GET',
	            url: config.URL + '/complaint/recent',
	        })
	    }

	}