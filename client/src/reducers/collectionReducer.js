import { COL_ADD_PLANT, COL_REMOVE_PLANT, DISPLAY_COL_ITEMS} from '../actions/types';

const Initial_State = {
    collection: []
}

let collectionReducer = (state = Initial_State, action) => {
  
    
    switch(action.type){
        case COL_ADD_PLANT:
            console.log(`inside of reducer ${action.payload}`)
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
            console.log('action.payload')
            console.log(action.payload.plant_id)

            let newCollection = state.collection.filter((plant)=>{
                console.log('plant')
                console.log(plant.plant.data)
                let plantArray = plant.plant.map(item => (
                    console.log('item'),
                    console.log(item),
                    item.plant_id
                ))
                console.log('plantArray')
                console.log(plantArray)
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