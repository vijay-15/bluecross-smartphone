	'use strict';

	/**
	 * @ngdoc function
	 * @name Blue Cross of India:Case Controller
	 * @author Raghav
	 * @description
	 * # Case Controller
	 * Contains the controller for register case view of the app
	 */

	angular

	.module('bluecross.controllers')

	.controller('caseController', function($scope, $state, $http, $ionicLoading, $cordovaLocalStorage){

		$scope.formData = {};

		var formData = new FormData();

		// Preview the image on selecting
		$("#file").change(function(){
		    readURL(this);
		});

		$scope.openDialog = function() {
			ionic.trigger('click', { target: document.getElementById('file') });
		}

		$scope.register = function() {

			$ionicLoading.show();	

			formData.append("register_by"   , $scope.formData.registerBy);
			formData.append("registerEmail" , $scope.formData.registerEmail);
			formData.append("registerPhone" , $scope.formData.registerPhone);
			formData.append("pic"           , $("#file")[0].files[0]);
			
			// Get the geo-location
			if (navigator.geolocation)
		    {
		        navigator.geolocation.getCurrentPosition(registerPosition,navigationError,
		          {
		            enableHighAccuracy : true,
		            timeout : 10000
		          }
		        );
		    } else {
		    	console.log("UNABLE TO GET GEOLOCATION");
		    }

		}

		function registerPosition(position){

			formData.append("animal_location", position.coords.latitude + "," + position.coords.longitude);

			$.ajax({
				url: URL + "/complaint/create",
				data: formData,
				cache: false,
			    contentType: false,
			    processData: false,
			    type: 'POST',
			    success: function(res){
			    	$cordovaLocalStorage.setItem('ambulance',JSON.stringify(res));
			    	$state.go("ambulance_assigned");
			    },
				error: function(res) {
					$state.go('ambulance_not_assigned');
				}
			});

		}

		function navigationError(error){
			console.log(error);
		}

		function readURL(input) {

		    if (input.files && input.files[0]) {
		        var reader = new FileReader();

		        reader.onload = function (e) {
		            $('#img_preview').attr('src', e.target.result);
		        }

		        reader.readAsDataURL(input.files[0]);
		    }
		}

	})
