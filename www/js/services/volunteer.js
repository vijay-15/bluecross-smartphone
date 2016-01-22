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

	.factory('VolunteerService', VolunteerService);

	VolunteerService.$inject = ['$cordovaLocalStorage','$http'];

	function VolunteerService ($cordovaLocalStorage, $http) {

		var voluteer = {
			getActivities       : getActivities,
			joinActivity        : joinActivity
		};

		return voluteer;

		function getActivities(date) {
			return [
			        {    
			          id: 12,
			          activity:"removing log",
			          time:"morning",total_volunteer:"12"
			        },
			        {
			          id: 13,
			          activity:"cleaning pupies",
			          time:"afternoon",total_volunteer:"6"
			        }
			      ]
		}

		function joinActivity(id) {
			return "JOINED ACTIVITY "+id;
		}

	}