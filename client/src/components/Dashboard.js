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

    // componentDidMount() {
    //     setInterval(() => {
    //         this.sensorUpdate()
    //     }, 5000);
    // }

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
              <Collection/>
            </>
        );
    }
}




// export default Dashboard;

// REQUIRE AUTH EXPORT
export default requireAuth(Dashboard)
