
import { AUTH_USER, AUTH_ERROR, AUTH_SIGNOUT, COL_ADD_PLANT, COL_DISPLAY_PLANT, COL_REMOVE_PLANT, WISH_ADD_PLANT, WISH_DISPLAY_PLANT, WISH_REMOVE_PLANT} from './types';
import addWeather from './addWeather';

import axios from 'axios';


// REFACTORING SIGNUP

let decodeToken = (token)=>{
    let split_token = token.split('.')
    let token_payload = split_token[1];
    let decoded_token_string = atob(token_payload);
    let decoded_token = JSON.parse(decoded_token_string)
    localStorage.setItem('user_id', decoded_token.sub);
    localStorage.setItem('user_name', decoded_token.user_name)
    localStorage.setItem('zipcode', decoded_token.zipcode)
    // console.log(`local storage user ID: ${localStorage.user_id}`)
    // console.log(`local Storage user name: ${localStorage.user_name}`)
}

export const signup = (formProps, callback) => async dispatch =>{

    try{
        let response = await axios.post('/signup', formProps);
        decodeToken(response.data.token)

        //dispatch

        dispatch({type: AUTH_USER, payload: response.data.token, isLoggedIn: true, username: formProps.username, zipcode: formProps.zipcode});
        localStorage.setItem('token', response.data.token);
        callback();
    }
    catch(e){
        dispatch({type: AUTH_ERROR, payload: 'That email is already in use...'})
    }
};

export const signin = (formProps, callback) => async dispatch => {

    try {
        let response = await axios.post('/signin', formProps);
        decodeToken(response.data.token);
        // console.log('signin form props')
        // console.log(formProps)
        
        dispatch({type: AUTH_USER, payload: response.data.token, isLoggedIn: true, username: localStorage.user_name, zipcode: localStorage.zipcode});

        localStorage.setItem('token', response.data.token);
        callback();
    }
    catch(e){
        dispatch({type: AUTH_ERROR, payload: 'The email or password is incorrect...'})
    }

}

export const signout = () => {
    localStorage.clear()
    return {
        type: AUTH_SIGNOUT,
        payload: '',
        isLoggedIn: false
    }
}

//Add/remove from collection:
export const addToCollectionDb = (plant) => async dispatch =>{

    let response = await axios.post('/colAdd', 
    {user_id: localStorage.user_id, plant_name: plant.name, plant_id: plant.id, 
        moisture: plant.moisture, temperature_range: plant.temperature_range,
        shade_tolerance: plant.shade_tolerance, image_url:plant.image_url
    })

    dispatch({type: COL_ADD_PLANT, payload: plant})
}

export const displayCollectionDb = () => async dispatch => {
    let response = await axios.post('/collection', {user_id: localStorage.user_id})
    dispatch({type: COL_DISPLAY_PLANT, payload: response.data});
}

export const removeFromCollectionDb = (plant) => async dispatch => {
    
    let plant_id = plant.item.id
    let user_id = localStorage.user_id
    let response = await axios.post('/colRemove', {user_id:user_id, plant_id: plant_id})
    dispatch({type: COL_REMOVE_PLANT, payload: plant})
}

export const addToWishlistDb = (plant) => async dispatch => {
    let response = await axios.post('/wishAdd', 
    {user_id: localStorage.user_id, plant_name: plant.name, plant_id: plant.id, 
        moisture: plant.moisture, temperature_range: plant.temperature_range,
        shade_tolerance: plant.shade_tolerance, image_url:plant.image_url
    })
    dispatch({type: WISH_ADD_PLANT, payload: plant})
}

export const displayWishlistDb = () => async dispatch => {
    let response = await axios.post('/wishlist', {user_id: localStorage.user_id})
    dispatch({ type: WISH_DISPLAY_PLANT, payload: response.data});
}

export const removeFromWishlistDb = (plant) => async dispatch =>{
    let plant_id = plant.item.id
    let user_id = localStorage.user_id
    let response = await axios.post('/wishRemove', {user_id:user_id, plant_id: plant_id})
    dispatch({type: WISH_REMOVE_PLANT, payload: plant})
}


