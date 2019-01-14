const axios = require('axios-https-proxy-fix');

const getClima = async(lat, lng) => {

    let temp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f6dde71ab1db3b047cf0f9238093c0ef&units=metric`, {
        proxy: {
            host: '172.31.219.30',
            port: 8080,
            auth: {
                username: 'SvcEsPro9428',
                password: '7HX8EOIP7mFPhWFy9to3'
            }
        }
    });

    /*  if (temp.response.status === 400) {
         throw new Error(`No hay resultados para la ciudad ${direccion}`);
     } */

    return temp.data.main.temp;

}

module.exports = {
    getClima
}


/* lat: 40.4345912,
lng: -3.6702063  */