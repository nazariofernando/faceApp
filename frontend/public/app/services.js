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

	console.log(original_url.$value)

	var originalPic = {
		url: function(cb) {
			
		},
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
		}
	}

	return originalPic

})