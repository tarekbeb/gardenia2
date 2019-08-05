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


    displayCollection() {
        this.props.displayCollectionDb()
        console.log("inisde display collctin function")

        // .then((result) => {
        //     return result
        // })
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
            this.displayCollection()
            
          })
        }
      }
    }
    else{
      console.log('fill blank')
    }
  }

  removeFromCollection(e, renderPlant){
    e.preventDefault();
    console.log('renderplant')
    console.log(renderPlant)

    this.props.removeFromCollectionDb(renderPlant)

}

// componentWillMount(){
//         this.displayCollection()
//         console.log('component')
//         console.log(this.props.collection)
// }


  render() {
      console.log('renderrr')
      console.log(this.props.collection)
      if(this.props.collection.length == 0){
        this.displayCollection()
      }

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
                  item.plant.map(renderPlant => (
                    <li key={renderPlant.plant_id}>{renderPlant.plant_id}
                    <button onClick={(e)=> this.removeFromCollection(e, {renderPlant})}>
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
    displayCollectionDb: () => dispatch(displayCollectionDb())
  }
}


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Search);
