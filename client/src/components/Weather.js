import React from 'react';
import { Card, Input, Image } from 'semantic-ui-react';
import {connect} from 'react-redux';
import addZipCode from '../actions/addZipCode';
import addWeather from '../actions/addWeather';
import cloud from './images/cloud.png';
import rain from './images/rain.png';
// import ice from './images/ice.png';
// import storm from './images/storm.png';
import sunny from './images/sunny.png';
import '../components/weather.css';


let apiAddress="http://api.openweathermap.org/data/2.5/weather?zip=";
let imperial="&units=imperial";
let apiKey="&appid=70fac660e1d65b98fb8ce269ad67799d";

// const WeatherAPI = "http://api.openweathermap.org/data/2.5/weather?zip=77007&units=imperial&appid=dce850dc2414fe1c6616f016a88fcf20";


class Weather extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            forecast: [],
            tempMain: {},
            zipcode: 0,
            error: '',
            image: {},
            name: ''
        }
    }


    onZipHandler = (e) => {
        
        if(e.charCode === 13){
            this.props.onaddZipCode({
                zipcode: e.target.value        
            })
            this.setState({
                zipcode: e.target.value,
                error: ''
            }, () => {
                fetch(apiAddress + this.state.zipcode + imperial + apiKey)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    this.setState({
                        forecast: data.weather[0],
                        tempMain: data.main,
                        name: data.name
                    })
                    let image = ((this.state.forecast.main === 'Clouds') ? {cloud} : (this.state.forecast.main === 'Haze' || this.state.forecast.main === 'Clear') ? {sunny} : (this.state.forecast.main === 'Rain') ? {rain} : null )
                    this.props.onaddWeather({
                        ...this.state,
                        forecast: data.weather[0],
                        tempMain: data.main,
                        weatherImage: Object.values(image)
                    })
                })
                .catch(err => {
                    this.setState({
                        error: 'Not a valid input'
                    })
                })
            })
        }
    }  



    render() {
        return (
            <>  
                <Card className="segment centered" id="weather"> 
                    <Card.Content>
                        {(Object.keys(this.props.weatherImage).length > 0) ? (<Image src={this.props.weatherImage}/>) : null }
                        <Card.Header>{this.props.forecast.description}</Card.Header>
                        {(Object.keys(this.props.weatherImage).length > 0) ? (<Card.Description>Low: {this.props.tempMain.temp_min} High: {this.props.tempMain.temp_max}</Card.Description>) : null }
                        {(Object.keys(this.props.weatherImage).length > 0) ? (<Card.Description>Location: <strong>{this.state.name}</strong></Card.Description>) : null }
                        <label>{this.state.error}</label>
                        <Input placeholder='Search...' onKeyPress={this.onZipHandler.bind(this)}
                        />
                    </Card.Content>
                </Card>
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return ({
        forecast: state.weatherReducer.forecast,
        tempMain: state.weatherReducer.tempMain,
        zipcode: state.weatherReducer.zipcode,
        weatherImage: state.weatherReducer.weatherImage
    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        onaddZipCode: zipcode => dispatch(addZipCode(zipcode)),
        onaddWeather: weather => dispatch(addWeather(weather))
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Weather);
