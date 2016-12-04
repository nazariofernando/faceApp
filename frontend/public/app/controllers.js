
'use strict';

(function() {


angular.module('faceapp')

.controller('mainCtrl', function($scope) {

	$scope.title = "FaceApp";

})

.controller('headerCtrl', function($scope, GetOriginalPic) {

	var fileButton = document.getElementById('fileButton');

	fileButton.addEventListener('change', function(e) {

		//Get File
		var file = e.target.files[0];
		var fileName = file.name;
		GetOriginalPic.save(file);

	});
	
})

.controller('frameCtrl', function($scope, GetOriginalPic, originalUrl, originalLeftX, originalUpY, originalWidth, originalHeight) {

	//ref to the database
	var ref = firebase.database().ref().child('original');

	//src of the original image, firebase storage
	$scope.originalSrc = originalUrl.$value;

	//coordinates for the crop
	var leftX = originalLeftX.$value;
	var upY = originalUpY.$value;
	var width = originalWidth.$value; // width = rightX - leftX
	var height = originalHeight.$value; // height = downY - upY

	//options for the crop
	var options = { bgOpacity: 0.7 };
	var jcrop_api;

	//original image DOM
	var first_img = $('#first-img');
	first_img[0].crossOrigin = "Anonymous";

	//canvas are the way to get the data from the image
	$('#first-frame').append("<canvas style='display:none' id='first-canvas'></canvas>");
	var first_canvas = $("#first-canvas")
	var ctx1 = first_canvas[0].getContext('2d');
	var imgData1;

	$('#second-frame').append("<canvas style='width:100%;' id='second-canvas'></canvas>");
	var second_canvas = $("#second-canvas")
	var ctx2 = second_canvas[0].getContext('2d');
	var imgData2;

	$('#third-frame').append("<canvas style='width:100%;' id='third-canvas'></canvas>");
	var third_canvas = $("#third-canvas");
	var ctx3 = third_canvas[0].getContext('2d');
	var imgData3;

	//after the original image loaded
	first_img[0].onload = function() {

		//start jcrop
		first_img.Jcrop(options, function(){
		  jcrop_api = this;
		  init_interface();
		});

		//get the coordinates of the crop
		function init_interface(){
		  $('#selectThing').on('click',function(e){
			var cor = jcrop_api.getSelection();
			GetOriginalPic.saveCor(cor.x, cor.y, cor.x2, cor.y2, cor.w, cor.y2 - cor.y);
		  });
		}

		//set the sizes for the canvas
		first_canvas[0].height = first_img[0].height;
		first_canvas[0].width = first_img[0].width;
		second_canvas[0].height = first_canvas[0].height;
		second_canvas[0].width = first_canvas[0].width;
		third_canvas[0].height = first_img[0].height;
		third_canvas[0].width = first_img[0].width;

		//putting the first image on canvas & getting the info of the image
		ctx1.drawImage(first_img[0], 0, 0, first_img[0].width, first_img[0].height);
		imgData1 = ctx1.getImageData(leftX, upY, width, height);

		//putting the croped image on canvas
		GetOriginalPic.savePixels(imgData1.data.toString());
		ctx2.putImageData(imgData1, 0, 0);

		//we need to change this
		ctx3.putImageData(imgData1, 0, 0);

		//each time something changes, the page is reloaded
		ref.on('child_changed', function(snap) {
			location.reload();
		})

	} 
	

})

})();



;