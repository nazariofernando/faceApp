'use strict';

//seting requirements
var express = require('express'),
    parser = require('body-parser'),
    firebase = require("firebase-admin"),
    firebase_key = require('../firebase.json'),
    python = require('python-shell')
;

firebase.initializeApp({
  credential: firebase.credential.cert(firebase_key),
  databaseURL: "https://faceapp-2c747.firebaseio.com"
});

var app = express();

var db = firebase.database();

var ref = db.ref();

app.use(parser.json());

var name = "test";

var test = "banana";

var pyshell = new python('python/' + name + '.py');

pyshell.send(test);

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement) 
  
});
 
// end the input stream and allow the process to exit 
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("The app is running on port 3000");
});