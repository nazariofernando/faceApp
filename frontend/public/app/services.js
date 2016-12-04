'use strict';

angular.module('faceapp')

.service('GetOriginalPic', function($firebaseObject, $firebaseArray) {

	var ref = firebase.database().ref().child('original');

	var storageRef = firebase.storage();

	var original = storageRef.ref('originals/original_1');

	original.getDownloadURL()
		.then(function(url) {
			var updates = {};
			updates['/url'] = url;
			ref.update(updates);
		})

	var original_url = $firebaseObject(ref.child('url'));


	var originalPic = {
		"url": original_url,
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
		saveCor: function(x, y, x2, y2, w) {
			var updates = {};
			updates['/leftX'] = x;
			updates['/upY'] = y;
			updates['/rightX'] = x2;
			updates['/downY'] = y2;
			updates['/width'] = w;
			ref.update(updates);
		}
	}

	return originalPic

})