
import React from 'react';
import { Card, Input, Image, Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import addZipCode from '../actions/addZipCode';

let apiAddress="api.openweathermap.org/data/2.5/weather?zip=";
let imperial="&units=imperial";
let apiKey="&appid=dce850dc2414fe1c6616f016a88fcf20";

const WeatherAPI = "http://api.openweathermap.org/data/2.5/weather?zip=77007&units=imperial&appid=dce850dc2414fe1c6616f016a88fcf20";


class Weather extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            forecast: [],
            tempMain: {},
            zipcode: 0
        }
    }

    // componentWillMount() {
    //     let zipcode = this.refs.zipcode.value
    //     let onZipHandler = (e) => {
    //         e.preventDefault();
    //         this.setState({
    //             zipcode: zipcode
    //         })
    //     }
    // }

    onZipHandler = (e) => {
        
        if(e.charCode === 13){
                        console.log('clicked')
            this.setState({
                zipcode: e.target.value        
            })

        }
    }  

    componentDidMount(){
        // fetch(apiAddress + '77007' + imperial + apiKey)
        fetch(WeatherAPI)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // console.log(data)
            this.setState({
                forecast: data.weather[0],
                tempMain: data.main
            })
        })
    }

    

    render() {
        console.log(this.state.zipcode)
        return (
            <>
                <Card fluid>
                    <Card.Content>
                        <Image variant="top" src="../layout/images/sunny.png" />
                        <Card.Header>{this.props.forecast.description}</Card.Header>
                        <Card.Description>Location:</Card.Description>
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
        tempMain: state.weatherReducer.tempMain
    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        onaddZipCode: zipcode => dispatch(addZipCode(zipcode))
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Weather);
