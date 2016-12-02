
'use strict';

angular.module('faceapp')

.controller('mainCtrl', function($scope) {

	$scope.title = "FaceApp";

})

.controller('headerCtrl', function($scope, GetOriginalPic) {

	//DOM file button
	var fileButton = document.getElementById('fileButton');

	var img1 = document.createElement("first-img");
	img1.id = "first-img";
	//var canvas1 = document.getElementById("first-frame-canvas");
	//var ctx1 = canvas1.getContext("2d");

	fileButton.addEventListener('change', function(e) {

		//Get File
		var file = e.target.files[0];
		var fileName = file.name;
		GetOriginalPic.save(file);

	});
	

	//var ctx2 = img2.getContext("2d");
	//var ctx3 = img3.getContext("2d");


		/*
		  jQuery(function($) {

		  	$('#first-frame-img').Jcrop();
		        
		  });

		  var width = $("#first-frame-img").height();
		  console.log(width);
		  //var imgData1 = ctx1.getImageData(0,0,50,50);

		

		  */

})

;