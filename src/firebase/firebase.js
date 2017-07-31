import firebase from 'firebase';

// var config = {
//     apiKey: "AIzaSyCZLCtRTQtRRHirde1P_xZNgfHam_aBMeA",
//     authDomain: "oneproject-a3d47.firebaseapp.com",
//     databaseURL: "https://oneproject-a3d47.firebaseio.com",
//     storageBucket: "oneproject-a3d47.appspot.com",
//     messagingSenderId: "767198825039"
//   };

  var config = {
    apiKey: "AIzaSyDZLwZVkBswH09GpzRoDRdmwNIUwKyQs3I",
    authDomain: "cars-30287.firebaseapp.com",
    databaseURL: "https://cars-30287.firebaseio.com",
    storageBucket: "cars-30287.appspot.com",
    messagingSenderId: "538044334211"
  };
  firebase.initializeApp(config);



firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'Car App'
});

/*
componentWillMount: function() {
  this.firebaseRef = new Firebase("https://ReactFireTodoApp.firebaseio.com/items/");
  this.firebaseRef.on("child_added", function(dataSnapshot) {
    this.items.push(dataSnapshot.val());
    this.setState({
      items: this.items
    });
  }.bind(this));
}
*/
