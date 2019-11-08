import React, { Component } from 'react';
import Routers from "./compunent/router";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDhUerPxf-oYDZOGVF2ognQl2uFZXLk3JU",
  authDomain: "tutor-web-app.firebaseapp.com",
  databaseURL: "https://tutor-web-app.firebaseio.com",
  projectId: "tutor-web-app",
  storageBucket: "tutor-web-app.appspot.com",
  messagingSenderId: "785181500444",
  appId: "1:785181500444:web:838ba53bc8c80a440babd9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default class App extends Component {
  render() {
    return (
      <Routers />
    );
  }
}
