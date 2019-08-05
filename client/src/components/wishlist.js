import React from 'react';
import jsonData from '../data/plants.json';
import {connect} from 'react-redux';
import {addToWishlistDb, displayWishlistDb, removeFromWishlistDb} from '../actions'

let jsonPlants = jsonData.plants
class Wishlist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        plants: jsonPlants,
        plant: [],
        wishlist: []
      }
      this.addToWishlist = this.addToWishlist.bind(this)
      this.displayWishlist = this.displayWishlist.bind(this)

    }

    addToWishlist(e){
        e.preventDefault();
        console.log(`event happened ${e}`)
        console.log(this.refs.plantNames.value)
        let plants = this.state.plants;
        let plantName = this.refs.plantNames.value
        if (plantName !== ''){
            for(let i=0; i<plants.length; i++){
            let plant = plants[i];
            if (plantName === plant.name){
                this.props.addToWishlistDb(plant)
        this.displayWishlist()
        console.log(`added ${plant.name} to wishlist db`)
        console.log(`added to wishlist db`)
        }
      }
    }
        else{
        alert('fill in blanks')
        }
  }     

displayWishlist(){
  this.props.displayWishlistDb()
}

removeFromWishlist(e, item){
  e.preventDefault();
  this.props.removeFromWishlistDb(item)
}

componentDidMount(){
    this.displayWishlist()
  }

// componentDidUpdate(prevProps){
//   if(this.props.dbWishlist !== prevProps.dbWishlist){
//     this.addToWishlist();
//   }
// }

render() {
  console.log(this.props.wishlist)
  console.log(this.props.dbWishlist)
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
                ref="plantNames"
              />
              <button type="submit">
                Add Item
              </button>
            </form>
            </section><hr/>

            <section className="section">
            <h2>wishlist</h2>
            <ul>
              {this.props.dbWishlist.map((item) => {
                return <li key={item.id}> {item.plant_name}
                  <button onClick={(e)=>{this.removeFromWishlist(e, {item})}}> Remove </button> 
                  {/* <img src={item.image_url}/> */}
              </li>
              })}
                
            </ul>
          </section>
        </div>
    )}
}

let mapStateToProps = (state) => {
    return ({
      wishlist: state.wishlistReducer.wishlist, 
      dbWishlist : state.wishlistReducer.dbWishlist
    })
  }

let mapDispatchToProps = (dispatch) => {
    return {
      addToWishlistDb : (plant) => dispatch(addToWishlistDb(plant)),
      displayWishlistDb: () => dispatch(displayWishlistDb()),
      removeFromWishlistDb: (plant) => dispatch(removeFromWishlistDb(plant))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);