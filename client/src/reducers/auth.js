import { AUTH_USER, AUTH_ERROR, AUTH_SIGNOUT } from '../actions/types';

const Initial_State = {
    authenticated: "",
    errorMessage: "",
    isLoggedIn: false,
    username: '',
    zipcode: 0
}

let auth = (state = Initial_State, action) => {
    console.log('payloadddd',action)
    switch(action.type){
        case AUTH_USER:

            return {
                ...state,
                authenticated: action.payload.token,
                isLoggedIn: action.payload.isLoggedIn,
                username: action.payload.username,
                zipcode: action.payload.zipcode
            }
            
        case AUTH_ERROR:
            return  {
                ...state,
                errorMessage: action.payload,
                isLoggedIn: action.isLoggedIn,
                username: action.username
            }
        case AUTH_SIGNOUT:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                username: action.username
            }
        default:
            return state;
    }
}

export default auth;