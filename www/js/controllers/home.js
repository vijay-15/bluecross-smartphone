	'use strict';

	/**
	 * @ngdoc function
	 * @name Blue Cross of India:Home Controller
	 * @author Raghav
	 * @description
	 * # Home Controller
	 * Contains the controller for home view of the app
	 */

	angular

	.module('bluecross.controllers')

	.controller('homeController', function($scope, $state, $ionicPopup, $http, $cordovaLocalStorage, HomeService,$ionicModal) {
		
		$scope.URL = config.URL;


		$scope.pets = HomeService.getPets();

		$scope.adoptPet = function(id) {
			var result = HomeService.bookPet(id);
			$scope.closeModal()
		}

		$ionicModal.fromTemplateUrl('home-modal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.modal = modal;
		 });

		  $scope.openModal = function(a) {
		  	$scope.modal.data = a;
		    $scope.modal.show();
		  };
		  $scope.closeModal = function() {
		    $scope.modal.hide();
		  };
		  //Cleanup the modal when we're done with it!
		  $scope.$on('$destroy', function() {
		    $scope.modal.remove();
		  });
		  // Execute action on hide modal
		  $scope.$on('modal.hidden', function() {
		    // Execute action
		  });
		  // Execute action on remove modal
		  $scope.$on('modal.removed', function() {
		    // Execute action
		  });
			})
