let weatherReducer = (
    state = {
        zipcode: 0,
        forecast: [],
        tempMain: {},
        weatherImage: {}

    }, action) => {
        switch(action.type){
            case 'addZipCode':
                return {
                    ...state,
                    zipcode: action.zipcode
                }
            case 'addWeather':
                return {
                    ...state,
                    forecast: action.forecast,
                    tempMain: action.tempMain,
                    weatherImage: action.weatherImage,
                    zipcode: action.zipcode
                }
        default:
            return state;
    }
    }

export default weatherReducer;