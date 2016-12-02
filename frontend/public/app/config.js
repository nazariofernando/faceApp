'use strict';

angular.module('faceapp')

.config(function($routeProvider) {

	$routeProvider
	.when("/", {
		controller: "frameCtrl",
		template: "<div class='frames'><div class='frame' id='first-frame'><img id='first-img' style='width:100%' ng-src={{originalSrc}}></img></div><div class='frame' id='second-frame'></div><div class='frame' id='third-frame'></div></div>",
		resolve: {
			originalUrl: function(GetOriginalPic) {
				return GetOriginalPic.url.$loaded();
			}
		}
	})

})