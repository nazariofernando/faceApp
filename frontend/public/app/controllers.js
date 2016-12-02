
'use strict';

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

	/*

	$('#first-img').Jcrop({
		setSelect: [ 50,50,100,100 ],
	  aspectRatio: 1
	});

	$('#first-img').on('cropstart cropmove cropend',function(e,s,c){

	  console.log(e,s,c);
	  // @todo: do something useful with c
	  // { x: 10, y: 10, x2: 30, y2: 30, w: 20, h: 20 }
	  // c.x, c.y, c.w, c.h, ...
	  // or access s.selectionApiMethod() or s.core.apiMethod() etc
	  // compare event type with e.type (e.g. in if conditional, switch block)

	});

	$('#first-img').on('cropmove cropend',function(e,s,c){
	  $('#cropx').val(c.x);
	});

	*/

})

;