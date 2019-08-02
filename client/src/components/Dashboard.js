import React from 'react';
import requireAuth from '../requireAuth';
import WeatherComponent from './Weather';



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
                <h1>Dashboard (Protected route)</h1>
                <WeatherComponent />
            </>
        );
    }
}




export default Dashboard;

// REQUIRE AUTH EXPORT
// export default requireAuth(Dashboard)
