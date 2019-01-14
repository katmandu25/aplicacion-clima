/**
 * GoogleMaps cambió la ubicación de la página que usaremos en el siguiente video, pero ahora está aquí
 * 
 *    https://developers.google.com/maps/documentation/geocoding/start
 */

//const axios = require('axios-https-proxy-fix');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${direccion} es de ${temp}º Celsius`
    } catch (e) {
        return `No se pudo obtener la temperatura de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(console.log(e)))

/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e))
 */
//console.log(argv.direccion);
/* let encodedUrl = encodeURI(argv.direccion)

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`, {
        proxy: {
            host: '172.31.219.30',
            port: 8080,
            auth: {
                username: 'SvcEsPro9428',
                password: '7HX8EOIP7mFPhWFy9to3'
            }
        }
    })
    .then(resp => {

        let mydata = resp.data.results[0];
        let address = mydata.formatted_address;
        let lat = mydata.geometry.location.lat;
        let lng = mydata.geometry.location.lng;

        console.log(`La direccion es ${address}. Y las coordenadas son ${lat} de Latitud y ${lng} de Longitud`);

        //console.log(JSON.stringify(resp.data, undefined, 2));

    })
    .catch(e => console.log('ERROR!!!!', e)); */

/* temp.getClima(40.4345912, -3.6702063)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e)) */