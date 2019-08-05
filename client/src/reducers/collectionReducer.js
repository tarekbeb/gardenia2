import { COL_ADD_PLANT, COL_REMOVE_PLANT, DISPLAY_COL_ITEMS} from '../actions/types';

const Initial_State = {
    collection: []
}

let collectionReducer = (state = Initial_State, action) => {
  
    
    switch(action.type){
        case COL_ADD_PLANT:
            return {
                ...state,
                collection: state.collection.concat({
                    plant: action.payload
                })
            }
        case DISPLAY_COL_ITEMS:
            return {
                ...state,
                collection: state.collection.concat({
                    plant: action.payload
                })
            }
            
        case COL_REMOVE_PLANT:

            let newCollection = state.collection.filter((plant)=>{
                let plantArray = plant.plant.map(item => (
                    item.plant_id
                ))
                return plantArray !== action.payload.plant_id
                })
            return  {
                ...state,
                collection: newCollection
            }
        default:
            return state;
    }
}

export default collectionReducer;