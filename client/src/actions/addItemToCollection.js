let addItemToCollection = (item) => {
  return ({
      type: 'COL_ADD_PLANT',
      plant: item
  })
}

export default addItemToCollection;