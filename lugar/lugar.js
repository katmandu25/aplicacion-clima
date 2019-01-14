const axios = require('axios-https-proxy-fix');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`, {
        proxy: {
            host: '172.31.219.30',
            port: 8080,
            auth: {
                username: 'SvcEsPro9428',
                password: '7HX8EOIP7mFPhWFy9to3'
            }
        }
    })

    if (resp.data.status === 'ZERO_RESULT') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let mydata = resp.data.results[0];
    let address = mydata.formatted_address;
    let lat = mydata.geometry.location.lat;
    let lng = mydata.geometry.location.lng;

    return {
        direccion: address,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}