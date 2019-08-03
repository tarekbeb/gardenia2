import { AUTH_USER, AUTH_ERROR, COL_ADD_PLANT, DISPLAY_COL_ITEMS, COL_REMOVE_PLANT} from './types';
import axios from 'axios';


// REFACTORING SIGNUP

let decodeToken = (token)=>{
    let split_token = token.split('.')
    let token_payload = split_token[1];
    let decoded_token_string = atob(token_payload);
    let decoded_token = JSON.parse(decoded_token_string)
    localStorage.setItem('user_id', decoded_token.sub);
    localStorage.setItem('user_name', decoded_token.user_name)
    console.log(`local storage user ID: ${localStorage.user_id}`)
    console.log(`local Storage user name: ${localStorage.user_name}`)
}

export const signup = (formProps, callback) => async dispatch =>{

    try{
        let response = await axios.post('/signup', formProps);

        console.log(response)

        //dispatch

        dispatch({type: AUTH_USER, payload: response.data.token});

        localStorage.setItem('token', response.data.token);
        decodeToken(response.data.token)
        callback();
    }
    catch(e){
        dispatch({type: AUTH_ERROR, payload: 'That email is already in use...'})
    }
};

export const signin = (formProps, callback) => async dispatch => {

    try {
        let response = await axios.post('/signin', formProps);
        
        dispatch({type: AUTH_USER, payload: response.data.token});

        localStorage.setItem('token', response.data.token);
        decodeToken(response.data.token)
        callback();
    }
    catch(e){
        dispatch({type: AUTH_ERROR, payload: 'The email or password is incorrect...'})
    }

}

export const signout = () => {

    localStorage.removeItem('token')
    return {
        type: AUTH_USER,
        payload: ''
    }
}

//Add/remove from collection:
export const addToCollectionDb = (plant) => async dispatch =>{

    let response = await axios.post('/colAdd', 
    {plant_id : plant.id, user_id: localStorage.user_id})

    console.log(`add to collection axios response: ${response}`)

    //dispatch

    dispatch({type: COL_ADD_PLANT, 
        payload: plant});

    localStorage.setItem('plant_id', response.data.plant_id);
    console.log(`after setItem localstorage ${response.data.plant_id}`) 
}

export const displayCollectionDb = (plant) => async dispatch => {
    let response = await axios.post('/collection', {user_id: localStorage.user_id})
    dispatch({type: DISPLAY_COL_ITEMS, 
        payload: response.plant});
}

export const removeFromCollectionDb = (plant) => async dispatch => {
    
    let response = await axios.post('/colRemove', {user_id: localStorage.user_id, plant_id: plant.item.id})
    console.log(`${plant.item.id}`)
    dispatch({type: COL_REMOVE_PLANT, payload: plant.item})
    // localStorage.removeItem('plant_id')
}

