import React from 'react';
import requireAuth from '../requireAuth';
import WeatherComponent from './Weather';
import "../components/dashboard.css";
// import PropTypes from 'prop-types';
import {
    Button,
    // Container,
    // Divider,
    // Grid,
    // Header,
    // Icon,
    Image,
    // List,
    // Menu,
    // Responsive,
    // Segment,
    // Sidebar,
    // Visibility,
    Card,
    // Search
  } from 'semantic-ui-react';



// const initialState = { isLoading: false, results: [], value: '' }

// const getWidth = () => {
//     const isSSR = typeof window === 'undefined'
  
//     return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
//   }

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: [],
            tempMain: {}
        }
    }


    render() {
        
        return (
            <>
                <WeatherComponent />

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
  </Card.Group>
            </>
        );
    }
}




export default Dashboard;

// REQUIRE AUTH EXPORT
// export default requireAuth(Dashboard)
