const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=3d98561b3afd73bb93bf58a3f0cece74&query=${latitude},${longitude}&units=f`;

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find the loation', undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is ${body.current.temperature} degrees. But it feels like ${body.current.feelslike} degrees`)
        }



    })
}

module.exports = {

     forecast
}