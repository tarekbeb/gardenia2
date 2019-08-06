import {COL_ADD_PLANT, COL_REMOVE_PLANT, COL_DISPLAY_PLANT} from '../actions/types';

const Initial_State = {
    collection: [],
    dbCollection: []
}

let collectionReducer = (state = Initial_State, action) => {
    switch (action.type){
        case COL_ADD_PLANT:
            return {
                ...state,
                collection: state.collection.concat(action.payload)
            }
            
        case COL_DISPLAY_PLANT: 
            return {
                ...state,
                dbCollection : action.payload
            }

        case COL_REMOVE_PLANT: 
            let newCollection = state.collection.filter((plant)=>{
            return plant.name !== action.payload.name
            })

            let new_dbCollection = state.dbCollection.filter((plant) =>{
                return plant.plant_name !== action.payload.item.plant_name
            })
        return  {
            ...state,
            collection: newCollection,
            dbCollection: new_dbCollection
        }
    default:
        return state;
    }
}

export default collectionReducer;