import React from 'react';
import jsonData from '../data/plants.json';
import WeatherComponent from './Weather';
import {connect} from 'react-redux';
import {addToCollectionDb, displayCollectionDb, removeFromCollectionDb} from '../actions/';
import {
    Button,
    // Container,
    // Divider,
    // Grid,
    // Header,
    // Icon,
    Image,
    Label,
    // List,
    // Menu,
    // Responsive,
    // Segment,
    // Sidebar,
    // Visibility,
    Input,
    Card,
    Form,
    Header
    // Search
  } from 'semantic-ui-react';
  import '../components/dashboard.css';


let jsonPlants = jsonData.plants
class Collection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        plants: jsonPlants,
        plant: [],
        collection: [],
        remove: {}
      }
      this.addToCollection = this.addToCollection.bind(this)
      this.displayCollection = this.displayCollection.bind(this)
      this.removeFromCollection = this.removeFromCollection.bind(this)
    }

    addToCollection(e){
        e.preventDefault();
        let plants = this.state.plants;
        let plantName = this.plantNameSearchTerm.value;
        if (plantName !== ''){
            for(let i=0; i<plants.length; i++){
            let plant = plants[i];
            if (plantName === plant.name){

              let p = new Promise((resolve, reject)=>{

                resolve(this.props.addToCollectionDb(plant)) 
              });


              p.then(()=>{
                this.displayCollection()
              })
              p.then(()=>{
                this.setState({
                  collection: this.state.collection.concat(plant)
                })
              })
        }
      }
    }
        else{
        alert('fill in blanks')
        }
  }     

displayCollection(){
  this.props.displayCollectionDb()
}

async removeFromCollection(e, plants){
    e.preventDefault();


    await this.props.removeFromCollectionDb(plants)

    this.setState({
      remove: plants 
    })

    
}

componentDidMount(){
    this.displayCollection()
  }

render() {
    return (
        <>
        <div className='fluid-container'>
        <WeatherComponent />
        <div id="searchbar">
          <div className="ui grid center aligned">
              <Header>Search Plants</Header>
          <Form onSubmit={this.addToCollection}>
              <input
                type="text"
                style={{paddingRight: '20px'}}
                id="addInput"
                placeholder="Plant Name"
                ref={ input => this.plantNameSearchTerm = input}
              />
              <Button type="submit">
                Add To Collection
              </Button>
            </Form>
            </div>
            </div>

      <Card.Group className="segment centered" id="cardback">
          {this.props.dbCollection.map((item) => {
            return (
                <Card key={item.id}>
                <Card.Content>
                  <Image floated='right' src={item.image_url} />
                  <Card.Header>{item.plant_name}</Card.Header>
                  </Card.Content>
                <Card.Content>
                    <Card.Description>
                        {item.temperature_range}<br/>
                        {item.shade_tolerance}
                    </Card.Description><br/>
                    <Card.Description>
                    Moisture:
                    { (this.state.sensor <= 15) &&
                    <Label circular color={'red'}>
                        {this.state.sensor}
                    </Label> &&
                    <Image src="https://i.gifer.com/7Q0a.gif" style={{width: "100px"}} floated="right" rounded />
                    }
                    { (this.state.sensor <= 35 && this.state.sensor >= 16) &&
                    <Label circular color={'yellow'}>
                        {this.state.sensor}
                    </Label> &&
                    <Image src="https://thumbs.gfycat.com/ChiefHeftyBasil-small.gif" style={{width: "100px"}} floated="right" rounded />
                    }
                    { (this.state.sensor <= 100 && this.state.sensor >= 36) &&
                    <Label circular color={'green'}>
                        {this.state.sensor}
                    </Label> &&
                    <Image src="https://thumbs.gfycat.com/ChiefHeftyBasil-small.gif" style={{width: "100px"}} floated="right" rounded />
                    }

                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button onClick={(e)=> this.removeFromCollection(e, {item})} 
                        basic color='red'>
                      Remove from collection
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            )
          }
          )}
        </Card.Group>
  </div>
  </>

    )}
        }

let mapStateToProps = (state) => {
    return ({
      collection: state.collectionReducer.collection, 
      dbCollection : state.collectionReducer.dbCollection,
      zipcode: state.auth.zipcode
    })
  }

let mapDispatchToProps = (dispatch) => {
    return {
        removeFromCollectionDb: plant => dispatch(removeFromCollectionDb(plant)), 
        addToCollectionDb: (plant) => dispatch(addToCollectionDb(plant)),
        displayCollectionDb: () => dispatch(displayCollectionDb())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Collection);