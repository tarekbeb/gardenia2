let addItemToWishlist = (item) => {
    return ({
        type: 'WISH_ADD_PLANT',
        plant: item
    })
  }
  
  export default addItemToWishlist;