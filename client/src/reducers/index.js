import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import auth from './auth';
// import addItem from './addItem';
import collectionReducer from './collectionReducer'
import weatherReducer from './weatherReducer';

export default combineReducers({
    auth: auth,
    form: formReducer,
    weatherReducer: weatherReducer,
    collectionReducer: collectionReducer
})