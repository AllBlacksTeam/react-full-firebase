import { combineReducers } from 'redux';
import contactsFromReducer from './contacts_reducer';

const rootReducer = combineReducers({
  contacts: contactsFromReducer
});

export default rootReducer;
