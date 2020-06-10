const axios = require('axios');

const getClima = async(lugar) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=4f04309d76567dd5502ee10c61e103e7&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}