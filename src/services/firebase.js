var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyCqwC7C3uvB55zeSOuKLkWax9ShvOL5IxM",
  authDomain: "iot-http.firebaseapp.com",
  databaseURL: "https://iot-http.firebaseio.com",
  projectId: "iot-http",
  storageBucket: "iot-http.appspot.com",
  messagingSenderId: "868668992062"
};
var firebaseApp = firebase.initializeApp(config);

var db = firebaseApp.database();

exports.sensorRef = db.ref("sensor");
