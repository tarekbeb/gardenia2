// let collection = (
//     state = {
//       collection: []
// }, action) => {
//   switch(action.type){
//     case 'addItemToCollection':
//       return {
//         ...state, 
//         collection: state.collection.concat({
//           plant: action.plant
//         })
//       }
//       case 'removeFromCollection':
//         return {
//           ...state,
//           collection: state.collection.filter((plant)=>{
//             return plant.name !== action.plant.name
//           })
//         }
//     // case 'addItemToWishlist':
//     //   return {
//     //     ...state,
//     //     wishlist: wishlist.state.wishlist.concat({
//     //       plant: action.plant
//     //     })
//     //   }
//     default:
//       return state;
//   }

// }

// export default collection;
