
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

.controller('frameCtrl', function($scope, GetOriginalPic, originalUrl) {

	$scope.originalSrc = originalUrl.$value;

	var options = { bgOpacity: 0.7 };
	var jcrop_api;
	var first_img = $('#first-img');
	first_img[0].crossOrigin = "Anonymous";

	first_img.Jcrop(options,function(){
	  jcrop_api = this;
	  init_interface();
	});

	function init_interface(){
	  $('#selectThing').on('click',function(e){
		var cor = jcrop_api.getSelection();
		GetOriginalPic.saveCor(cor.x, cor.y, cor.x2, cor.y2, cor.w);
	  });
	}

	$('#first-frame').append("<canvas style='display:none' id='first-canvas'></canvas>");
	var first_canvas = $("#first-canvas")
	var ctx1 = first_canvas[0].getContext('2d');
	var imgData1;

	first_img[0].onload = function() {
		first_canvas[0].height = first_img[0].height;
		first_canvas[0].width = first_img[0].width;
		ctx1.drawImage(first_img[0], 0, 0, first_img[0].width, first_img[0].height);
		//localStorage.setItem("savedImageData", first_canvas[0].toDataURL("image/png") );
		imgData1 = ctx1.getImageData(0, 0, first_img[0].width, first_img[0].height);
	} 

})

})();



;