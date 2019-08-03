import React from 'react';
import jsonData from '../data/plants.json';
import {connect} from 'react-redux';
// import addItemToCollection from '../actions/addItemToCollection';
// import removeFromCollection from '../actions/removeFromCollection';
import {addToCollectionDb, displayCollectionDb, removeFromCollectionDb} from '../actions/';

let jsonPlants = jsonData.plants
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: jsonPlants,
      plant: [],
      collection: []
    }
    this.addToCollection = this.addToCollection.bind(this)
    this.displayCollection = this.displayCollection.bind(this)
    this.removeFromCollection = this.removeFromCollection.bind(this)
  }

  displayCollection(){
    let collection = this.props.displayCollectionDb()
    console.log(`display collection function ${collection}`)
    return collection;
  }

  addToCollection(e){
    e.preventDefault();
    let plants = this.state.plants;
    let plantName = this.refs.plantName.value
    if (plantName !== ''){
      for(let i=0; i<plants.length; i++){
        let plant = plants[i];
        if (plantName === plant.name){
          let newCollection = this.state.collection.concat(plant)
          this.setState({
            collection: newCollection
          }, ()=>{
            // this.props.onaddItemToCollection(plant)
            this.props.addToCollectionDb(plant)
            // this.displayCollection()
            
          })
        }
      }
    }
    else{
      console.log('fill blank')
    }
  }

  removeFromCollection(e, plants){
    e.preventDefault();
    console.log(plants)

    this.props.removeFromCollectionDb(plants)
  //   let plantCollection = this.refs.plantCollection
  //   let collection = this.props.collection.slice();
  //   console.log(collection)
  //   console.log(this.state.collection)
  //   collection.splice(plantCollection.key, 1);
  // this.setState({
  //   collection: collection
  // }, ()=>{
  //   console.log(this.state.collection)
  //   // console.log(plantCollection.name)
  //   this.props.onremoveFromCollection(plantCollection)
  //   console.log(this.props.collection)
//   });
}

componentWillMount(){
  this.displayCollection();
  console.log(`inside component did mount`)
}

  render() {
    console.log(`Global state collection: ${this.props.collection}`)
    return (
      <div>
        <section>
             <h2>Plants API</h2>
             <ul>
            {this.state.plants.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <form onSubmit={this.addToCollection}>
              <input
                type="text"
                id="addInput"
                placeholder="Plant Name"
                ref="plantName"
              />
              <button type="submit">
                Add Item
              </button>
            </form>
            </section><hr/>
          <section className="section">
            <h2>Collection</h2>
            <ul>
              {this.props.collection.map(item => (
                item.plant.data.map(plants => (
                  <li key={plants.plant_id}>{plants.plant_id}
                  <button onClick={(e)=> this.removeFromCollection(e, {plants})}>
                    Remove
                  </button> 
                </li>
                ))
              ))}
            </ul>
          </section>
        </div>
    );
  }
}

let mapStateToProps = (state) => {
  return ({
    collection: state.collectionReducer.collection, 
  })
}

let mapDispatchToProps = (dispatch) => {
  return {
    // onaddItemToCollection: plant => dispatch(addItemToCollection(plant)),
    removeFromCollectionDb: plant => dispatch(removeFromCollectionDb(plant)), 
    addToCollectionDb: (plant) => dispatch(addToCollectionDb(plant)),
    displayCollectionDb: (plant) => dispatch(displayCollectionDb(plant))
  }
}


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Search);
