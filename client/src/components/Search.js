// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Axios from 'axios';
// import jsonDatas from '../data/plants.json';


// let jsonData = jsonDatas.plants

// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.addItemToCollection = this.addItemToCollection.bind(this);
//     this.state = {
//       plants: jsonData,
//       collection: [],
//       wishList : []
//     }
//   }

//     // addItemToCollection(e){
//     //   e.preventDefault();
//     //   let plants = this.state.plants;
//     //   if (e.target.value !== ''){
//     //     for(let i=0; i<plants.length; i++){
//     //       let plant = plants[i];
//     //       if (e.target.value === plant.name){
//     //         let newCollection = this.state.collection.concat(plant)
//     //         this.setState({
//     //           collection: newCollection
//     //         })
//     //       }
//     //     }
//     //     console.log(this.state.collection)
//     //   }
//     //   else{
//     //     console.log('fill blank')
//     //   }
//     // }

//     addItemToCollection(e){
//       e.preventDefault();
//       let collection = this.state.collection;
//       let plants = this.state.plants;
//       const newItem = document.getElementById("addInput");
//       const form = document.getElementById("addItemForm");

//       if (newItem.value !== ''){
//         for(let i=0; i<plants.length; i++){
//           let plant = plants[i];
//           if (newItem.value === plant.name){
//             let newCollection = collection.concat(plant)
//             this.setState({
//               collection: newCollection
//             })
//           }
//         }
//         console.log(this.state.collection)
//         form.reset()
//       }
//       else{
//         console.log('fill blank')
//       }
//     }

  //   removeFromCollection(item){
  //     item.preventDefault();
  //     let collection = this.state.collection.slice();
  //     console.log(this.state.collection)
  //     collection.splice(item.key, 1);
  //   this.setState({
  //     collection: collection
  //   });
  // }

//   // componentDidMount(){
//   //   this.plantsElements();
//   // }


//   render() {
//     return(
//       <div>
//         <div>
//           <section>
//             <h2>Plants API</h2>
//             <ul>
//               {jsonData.map(item => (
//                 <li key={item.id}>{item.name}</li>
//               ))}
//             </ul>
//             {/* onSubmit={this.addItemToCollection} */}
//             <form id="addItemForm">
//               <input
//                 id={jsonData.id}
//                 type="text"
//                 id="addInput"
//                 placeholder="Plant Name"
//                 ref="plantName"
//               />
//               {/* onClick={this.addItemToCollection} */}
//               <button type="submit" onClick={this.addItemToCollection}>
//                 Add Item
//               </button>
//             </form>
//             </section><hr/>
//           <section className="section">
//             <h2>Collection</h2>
//             <ul>
//               {this.state.collection.map(item => (
//                 <li key={item.id}>{item.name}
//                   <button onClick={this.removeFromCollection}>
//                     Remove
//                   </button> 
//                 </li>
                
//               ))}
//             </ul>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }

//   export default Search;

import React from 'react';
import jsonData from '../data/plants.json';
import {connect} from 'react-redux';
import addItemToCollection from '../actions/addItemToCollection';
import removeFromCollection from '../actions/removeFromCollection';
import {addToCollectionDb, displayCollectionDb} from '../actions/';

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
            this.props.onaddItemToCollection(plant)
            this.props.addToCollectionDb(plant)
            this.displayCollection()
            // console.log(this.state.collection[0])
            // console.log(`plant obj: ${plant.name}`)
          })
        }
      }
    }
    else{
      console.log('fill blank')
    }
  }

  removeFromCollection(e){
    e.preventDefault();
    let plantCollection = this.refs.plantCollection
    let collection = this.props.collection.slice();
    console.log(collection)
    console.log(this.state.collection)
    collection.splice(plantCollection.key, 1);
  this.setState({
    collection: collection
  }, ()=>{
    console.log(this.state.collection)
    // console.log(plantCollection.name)
    this.props.onremoveFromCollection(plantCollection)
    console.log(this.props.collection)
  });
}

// componentWillMount(){

// }

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
                value={this.state.plant.id}
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
                <li ref="plantCollection" key={item.id}>{item.name}
                  <button onClick={this.removeFromCollection}>
                    Remove
                  </button> 
                </li>
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
    onaddItemToCollection: plant => dispatch(addItemToCollection(plant)),
    onremoveFromCollection: plant => dispatch(removeFromCollection(plant)), 
    addToCollectionDb: (plant) => dispatch(addToCollectionDb(plant)),
    displayCollectionDb: (plant) => dispatch(displayCollectionDb(plant))
  }
}


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Search);
