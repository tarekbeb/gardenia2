import { AUTH_USER, AUTH_ERROR, AUTH_SIGNOUT } from '../actions/types';

const Initial_State = {
    authenticated: "",
    errorMessage: "",
    isLoggedIn: false
}

let auth = (state = Initial_State, action) => {
    
    switch(action.type){
        case AUTH_USER:

            return {
                ...state,
                authenticated: action.payload,
                isLoggedIn: action.isLoggedIn
            }
            
        case AUTH_ERROR:
            return  {
                ...state,
                errorMessage: action.payload,
                isLoggedIn: action.isLoggedIn
            }
        case AUTH_SIGNOUT:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default:
            return state;
    }
}

export default auth;