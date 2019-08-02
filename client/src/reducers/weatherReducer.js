let weatherReducer = (
    state = {
        forecast: [],
        tempMain: {}

    }, action) => {
        switch(action.type){
            case 'addZipCode':
                return {
                    ...state,
                    forecast: state.forecast,
                    tempMain: state.tempMain
                }
        default:
            return state;
    }
    }

export default weatherReducer;