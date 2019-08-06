import React from 'react';
import requireAuth from '../requireAuth';
import WeatherComponent from './Weather';
import Collection from './Collection';
// import PropTypes from 'prop-types';
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
    Card
    // Search
  } from 'semantic-ui-react';
  import "../components/dashboard.css";

let sensorData = 'https://io.adafruit.com/api/feeds?x-aio-key=1de8b4e601e94f9a96f29c07626470c2';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: [],
            tempMain: {},
            sensor: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.sensorUpdate()
        }, 5000);
    }

    sensorUpdate() {
        fetch(sensorData)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            this.setState({
                ...this.state,
                sensor: data[0].last_value
            })
        })
        .catch((error) => {
            console.log('error', error)
        })
    }

    // componentDidUpdate() {
    //     fetch(sensorData)
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((data) => {
    //         this.setState({
    //             ...this.state,
    //             sensor: data[0].last_value
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error('error', error))
    //     })
    // }
    

    render() {
        console.log(this.state.sensor)

        return (
            <>
                {/* <WeatherComponent /> */}
          <Collection/>
      {/* <Card.Group className="segment centered" id="cardback">
      <Card>
        <Card.Content>
          <Image floated='right' src='https://www.planetnatural.com/wp-content/uploads/2012/12/sage-herb.jpg' />
          <Card.Header>Sage</Card.Header>
          <Card.Meta>Herb</Card.Meta>
          <Card.Description>
            Sage is a herb
          </Card.Description>
        </Card.Content>
        <Card.Content>
            <Card.Description>
            Moisture:
            { (this.state.sensor <= 15) &&
            <Label circular color={'red'}>
                {this.state.sensor}
            </Label>
            }
            { (this.state.sensor <= 35 && this.state.sensor >= 16) &&
            <Label circular color={'yellow'}>
                {this.state.sensor}
            </Label>
            }
            { (this.state.sensor <= 100 && this.state.sensor >= 36) &&
            <Label circular color={'green'}>
                {this.state.sensor}
            </Label>
            }

            </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Move to wishlist
            </Button>
            <Button basic color='red'>
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image floated='right' src='https://cdn-prod.medicalnewstoday.com/content/images/articles/266/266370/rosemary-leaves-bound-in-rope-on-wooden-table.jpg' />
          <Card.Header>Rosemary</Card.Header>
          <Card.Meta>Herb</Card.Meta>
          <Card.Description>
            Rosemary is a herb
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Move to wishlist
            </Button>
            <Button basic color='red'>
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image floated='right' src='http://2.bp.blogspot.com/-Rb9ZBrviOhI/TmE0ZmWfRII/AAAAAAAASYM/BRCSkzDp2mk/s1600/fresh-herbs-500w-kalynskitchen.jpg' />
          <Card.Header>Thyme</Card.Header>
          <Card.Meta>Herb</Card.Meta>
          <Card.Description>Thyme is a herb</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Move to wishlist
            </Button>
            <Button basic color='red'>
            Remove from collection
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>

    <div className="ui search">
        <input type="text"></input>
        <div>
            <Button primary>Add to Favorites</Button>
            <Button secondary>Add to Wishlist</Button>
        </div>
    </div>
    <Card.Group className="segment centered" id="cardback">
      <Card>
        <Card.Content>
          <Image floated='right' src='https://www.planetnatural.com/wp-content/uploads/2012/12/sage-herb.jpg' />
          <Card.Header>Sage</Card.Header>
          <Card.Meta>Herb</Card.Meta>
          <Card.Description>
            Sage is a herb
          </Card.Description>
        </Card.Content>
        <Card.Content>
          
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Add
            </Button>
            <Button basic color='red'>
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>

      
      <Card>
        <Card.Content>
          <Image floated='right' src='https://cdn-prod.medicalnewstoday.com/content/images/articles/266/266370/rosemary-leaves-bound-in-rope-on-wooden-table.jpg' />
          <Card.Header>Rosemary</Card.Header>
          <Card.Meta>Herb</Card.Meta>
          <Card.Description>
            Rosemary is a herb
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Add
            </Button>
            <Button basic color='red'>
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image floated='right' src='http://2.bp.blogspot.com/-Rb9ZBrviOhI/TmE0ZmWfRII/AAAAAAAASYM/BRCSkzDp2mk/s1600/fresh-herbs-500w-kalynskitchen.jpg' />
          <Card.Header>Thyme</Card.Header>
          <Card.Meta>Herb</Card.Meta>
          <Card.Description>Thyme is a herb</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Add
            </Button>
            <Button basic color='red'>
            Remove
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group> */}
            </>
        );
    }
}




// export default Dashboard;

// REQUIRE AUTH EXPORT
export default requireAuth(Dashboard)
