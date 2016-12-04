'use strict';

//seting requirements
var express = require('express'),
    parser = require('body-parser'),
    firebase = require("firebase-admin"),
    firebase_key = require('../firebase.json'),
    python = require('python-shell'),
    getPixels = require("get-pixels")
;

//database initialization
firebase.initializeApp({
  credential: firebase.credential.cert(firebase_key),
  databaseURL: "https://faceapp-2c747.firebaseio.com"
});

//app initialization
var app = express();

//database ref
var db = firebase.database();
var ref = db.ref();
var original = ref.child('original');

//parse things as jsons
app.use(parser.json());

//name of the python file
var name = "test";

//string that will be sent by stdn to python
var test = "banana";

//everything something changes on the database
original.on('child_changed', function(snapshot) {
  
  var python = require('python-shell'); //dont change this
  var pyshell = new python('python/' + name + '.py'); //dont change this either, just the varaible "name" above

  //this communicates with python by stdn
  pyshell.send(snapshot.key);

  //this is the pyhton answer
  pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement) 
  });

  // end the input stream and allow the process to exit 
  pyshell.end(function (err) {
    if (err) throw err;
    console.log('finished');
  });

})

// localhost:3000
var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("The app is running on port 3000");
});