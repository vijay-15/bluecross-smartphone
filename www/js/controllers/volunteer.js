'use strict';

angular

.module('bluecross.controllers')

.controller('volunteerController', function($scope, $location, $filter, $ionicPopup, VolunteerService){

    $scope.dateDisp = undefined;

    $scope.datepickerObject = {
      titleLabel: 'Title',  //Optional
      todayLabel: 'Today',  //Optional
      closeLabel: 'Close',  //Optional
      setLabel: 'Set',  //Optional
      setButtonType : 'button-assertive',  //Optional
      todayButtonType : 'button-assertive',  //Optional
      closeButtonType : 'button-assertive',  //Optional
      inputDate: new Date(),  //Optional
      mondayFirst: true,  //Optional
      disabledDates: "", //Optional
      weekDaysList: "", //Optional
      monthList: "", //Optional
      templateType: 'popup', //Optional
      showTodayButton: 'true', //Optional
      modalHeaderColor: 'bar-positive', //Optional
      modalFooterColor: 'bar-positive', //Optional
      from: new Date(2012, 8, 2), //Optional
      to: new Date(2018, 8, 25),  //Optional
      callback: function (val) {  //Mandatory
        dateChanged(val);
      },
      dateFormat: 'dd-MM-yyyy', //Optional
      closeOnSelect: false, //Optional
    };

    $scope.selected = {};

    $scope.showAlert = function(activity) {
      var alertPopup = $ionicPopup.alert({
        title: 'Volunteer',
        template: 'You have joined '+activity
      });
      alertPopup.then(function(res) {
        console.log('Thank you for joining here and making a good change in the world');
      });
    };

    $scope.takepart = function(id, index) {
      $scope.selected[index] = true;
      console.log($scope.selected)
      var result = VolunteerService.joinActivity(id);
      console.log(result)
    } 

    function dateChanged(d) {
      console.log(d)
      $scope.dateDisp = $filter('date')(d, "dd-MM-yyyy")
      $scope.activities = VolunteerService.getActivities( $scope.dateDisp )
    }
})