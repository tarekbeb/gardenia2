import React from 'react';
import jsonData from '../data/plants.json';
import {connect} from 'react-redux';
import {addToWishlistDb} from '../actions'

let jsonPlants = jsonData.plants
class Wishlist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        plants: jsonPlants,
        wishlist: []
      }
      this.addToWishlist = this.addToWishlist.bind(this)

    }

addToWishlist(e){
  e.preventDefault()
  console.log(`event happened ${e}`)
  let plants = this.state.plants;
  let plantName = this.refs.plantName.value
  if (plantName !== ''){
    for(let i=0; i<plants.length; i++){
      let plant = plants[i];
      if (plantName === plant.name){
          this.props.addToWishlistDb(plant)
          console.log(`added to wishlist db`)
        }
      }
    }
    else{
      console.log('fill blank')
    }
  }     


render() {
    return (
        <div>
            <section>
             <h2>Plants API</h2>
             <ul>
            {this.state.plants.map(item => (
                <li key={item.id}>{item.name}</li> 
              ))}
            </ul>
            <form onSubmit={this.addToWishlist}>
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
                <li>
                  <button>
                    Remove
                  </button> 
                </li>
            </ul>
          </section>
        </div>
    )}
}

let mapStateToProps = (state) => {
    return ({
      wishlist: state.wishlistReducer.wishlist, 
    })
  }

let mapDispatchToProps = (dispatch) => {
    return {
      addToWishlistDb : (plant) => dispatch(addToWishlistDb(plant))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);