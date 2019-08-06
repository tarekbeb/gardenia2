import React from 'react';
import requireAuth from '../requireAuth';
import WeatherComponent from './Weather';
import Collection from './Collection';
import {Button, Image, Label, Card} from 'semantic-ui-react';
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

    render() {
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
