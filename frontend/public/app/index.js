'use strict';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDbz67l62GHJUcvPlijD7Wd6FLRH1I6ggY",
    authDomain: "faceapp-2c747.firebaseapp.com",
    databaseURL: "https://faceapp-2c747.firebaseio.com",
    storageBucket: "faceapp-2c747.appspot.com",
    messagingSenderId: "635316753885"
};

firebase.initializeApp(config);

angular.module('faceapp', ["firebase"]);