const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

clima.getClima(argv.direccion)
    .then(console.log)
    .catch(console.log)