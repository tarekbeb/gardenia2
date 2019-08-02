import { COL_ADD_PLANT, COL_REMOVE_PLANT } from '../actions/types';
import { combineReducers } from 'redux';

const Initial_State = {
    collection: [],
    addedToCollection: "",
    addedToCollectionError: ""
}

let collection = (state = Initial_State, action) => {
  
    
    switch(action.type){
        case COL_ADD_PLANT:

            return {
                ...state,
                addedToCollection: action.payload
            }
            
        case COL_REMOVE_PLANT:
            return  {
                ...state,
                addedToCollectionError: action.payload
            }
        default:
            return state;
    }
}

export default collection;