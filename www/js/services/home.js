'use strict';


angular

	.module('bluecross.services')

	.factory('HomeService', HomeService);

	HomeService.$inject = ['$cordovaLocalStorage','$http'];

	function HomeService ($cordovaLocalStorage, $http) {

		var home = {
			getPets       : getPets,
			bookPet       : bookPet
		};

		return home;

		function getPets(data) {
			return [
			        {    
						image:"http://www.metrodogstop.com/cms/wp-content/uploads/2013/05/cute-dog.jpg",
						name:"rocky",
						desc:"cute and energetic",
						type:"dog",
						age:"14"
			        },
					{  
						image:"http://youngama.in/wp-content/uploads/2015/05/fi.jpg",
						name:"tom",
						desc:"cute and tiny",
						type:"cat",
						age:"1"
					},
			        {   
			        	image:"http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
			        	name:"scooby",
			        	desc:"calm and cute",
			        	type:"dog",
			        	age:"100"
			        },
			        {   
			        	image:"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
			        	name:"singham 3",
			        	desc:"ongi adicha onra ton weightu",
			        	type:"cat",
			        	age:".5"
			        }
			]}

		function bookPet(id) {
			return "BOOKED PET "+id;
		}

	}