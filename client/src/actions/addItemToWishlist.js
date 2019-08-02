let addItemToWishlist = (item) => {
    return ({
        type: 'addItemToWishlist',
        plant: item
    })
  }
  
  export default addItemToWishlist;