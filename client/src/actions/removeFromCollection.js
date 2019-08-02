let removeFromCollection = (item) => {
    return ({
        type: 'COL_REMOVE_PLANT',
        plant: item
    })
  }
  
  export default removeFromCollection;