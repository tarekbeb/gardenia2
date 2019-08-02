import React from 'react';
import jsonData from '../data/plants.json';
import {connect} from 'react-redux';

let jsonPlants = jsonData.plants
class Wishlist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        plants: jsonPlants,
        Wishlist: [{}, {}, {}]
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
            {/* onSubmit={this.addToWishlist} */}
            <form >
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

    }}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);