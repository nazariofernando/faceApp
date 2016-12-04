'use strict';

angular.module('faceapp')

.service('GetOriginalPic', function($firebaseObject, $firebaseArray) {

	//database reference
	var ref = firebase.database().ref().child('original');

	//where the images are storage
	var storageRef = firebase.storage();
	var original = storageRef.ref('originals/original_1');

	//get the url of the images
	original.getDownloadURL()
		.then(function(url) {
			var updates = {};
			updates['/url'] = url;
			ref.update(updates);
		})

	//variables of the image
	var original_url = $firebaseObject(ref.child('url'));
	var leftX = $firebaseObject(ref.child('leftX'));
	var upY = $firebaseObject(ref.child('upY'));
	var width = $firebaseObject(ref.child('width')); // width = rigthX - leftX
	var height = $firebaseObject(ref.child('height')); //height = downY - upY

	//image data in json, with methods to change it
	var originalPic = {
		"url": original_url,
		"width": width,
		"height": height,
		"leftX": leftX,
		"upY": upY,
		save: function(file) {
			var task = original.put(file);
			task.on('state_changed',

				function progress(snapshot) {

				},

				function error(err) {
					console.log(err);
				},

				function complete() {
					location.reload();
				}

			)
		},
		saveCor: function(x, y, x2, y2, w, h) {
			var updates = {};
			updates['/leftX'] = x;
			updates['/upY'] = y;
			updates['/rightX'] = x2;
			updates['/downY'] = y2;
			updates['/width'] = w;
			updates['/height'] = h;
			ref.update(updates);
		},
		savePixels: function(pixels) {
			var updates = {};
			updates['/pixels'] = pixels;
			ref.update(updates);
		}
	}

	return originalPic

})