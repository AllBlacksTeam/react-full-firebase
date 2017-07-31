//ReactFire is incompatible with Redux.

//Using redux-thunk, we create a new action everytime a value changes in the Firebase database.

//How to create a database from the Firebase dashboard
//https://www.youtube.com/watch?v=mJv4rtHoFQ4
import firebase from 'firebase';

// var config = {
//   apiKey: "AIzaSyCZLCtRTQtRRHirde1P_xZNgfHam_aBMeA",
//   authDomain: "oneproject-a3d47.firebaseapp.com",
//   databaseURL: "https://oneproject-a3d47.firebaseio.com",
//   storageBucket: "oneproject-a3d47.appspot.com",
//   messagingSenderId: "767198825039"
// };
//
// firebase.initializeApp(config);


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZLwZVkBswH09GpzRoDRdmwNIUwKyQs3I",
  authDomain: "cars-30287.firebaseapp.com",
  databaseURL: "https://cars-30287.firebaseio.com",
  storageBucket: "cars-30287.appspot.com",
  messagingSenderId: "538044334211"
};
firebase.initializeApp(config);

var Cars = firebase.database().ref().child('cars');

export function getCars() {
  return (dispatch) => {
    Cars.on('value', snapshot => {
      dispatch({
        type: 'FETCH_DATA',
        payload: snapshot.val()
      });
    });
  };
}

export function deleteCar(CarId) {
  return (dispacth) => {
    Cars.child(CarId).remove();
  };
}

export function createCar(car) {
  return (dispatch) => {
    Cars.push(car);
  };
}


export function selectCar(car) {
  return {
    type: 'CAR_SELECTED',
    payload: car
  };
}
