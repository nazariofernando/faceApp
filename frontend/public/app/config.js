'use strict';

(function() {

	angular.module('faceapp')

	.config(function($routeProvider) {

		$routeProvider
		.when("/", {
			controller: "frameCtrl",
			template: "<div class='frames'><div class='frame' id='first-frame'><img id='first-img' style='width:100%' ng-src={{originalSrc}} ></img></div><div class='frame' id='second-frame'></div><div class='frame' id='third-frame'></div><button id='selectThing'>Select</button></div>",
			resolve: {
				originalUrl: function(GetOriginalPic) {
					return GetOriginalPic.url.$loaded();
				}
			}
		})

})

})();


//"https://firebasestorage.googleapis.com/v0/b/faceapp-2c747.appspot.com/o/originals%2Foriginal_1?alt=media&token=ff7645c6-e0e9-4d02-b0b7-c653bdcda817"
//ng-src={{originalSrc}}