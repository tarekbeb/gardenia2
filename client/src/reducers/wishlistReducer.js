import {WISH_ADD_PLANT, WISH_REMOVE_PLANT, WISH_DISPLAY_PLANT} from '../actions/types';

const Initial_State = {
    wishlist: [],
    dbWishlist: []
}

let wishlistReducer = (state = Initial_State, action) => {
    switch (action.type){
        case WISH_ADD_PLANT:
            console.log(action.payload)
            return {
                ...state,
                wishlist: state.wishlist.concat(action.payload)
            }
        case WISH_DISPLAY_PLANT: 
            console.log(`wish list reducer display case`)
            console.log(action.payload)
            return {
                ...state,
                dbWishlist : state.dbWishlist.concat(action.payload)
            }
        case WISH_REMOVE_PLANT: 
            console.log(`inside wishlist remove reducer ${action.payload}`)
            let newWishlist = state.wishlist.filter((plant)=>{
            return plant.name !== action.payload.name
            })
        return  {
            ...state,
            wishlist: newWishlist
        }
    default:
        return state;
    }
}

export default wishlistReducer;