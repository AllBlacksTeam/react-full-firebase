import { combineReducers } from 'redux';
import CarsReducer from './reducer_cars';
import ActiveCar from './reducer_active_car';


const rootReducer = combineReducers({

  cars: CarsReducer,
  activeCar: ActiveCar

});

export default rootReducer;
