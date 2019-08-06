import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import auth from './auth';
import collectionReducer from './collectionReducer'
import weatherReducer from './weatherReducer';
import wishlistReducer from './wishlistReducer'

export default combineReducers({
    auth: auth,
    form: formReducer,
    weatherReducer: weatherReducer,
    collectionReducer: collectionReducer,
    wishlistReducer: wishlistReducer
})