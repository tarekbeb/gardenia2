let addWeather = (item) => {
    return ({
        type: 'addWeather',
            forecast: item.forecast,
            tempMain: item.tempMain,
            weatherImage: item.weatherImage,
            zipcode: localStorage.zipcode 
    })
}

export default addWeather;