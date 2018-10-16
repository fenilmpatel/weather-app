const request = require('request');
console.log('starting the app');

var getweather = (lat,lng,callback) =>{
request({
url:`https://api.darksky.net/forecast/9a9c0aeb73c549bf41a230c92afbcdea/21.7531028,72.1374864`,
json:true
},
(error,response,body)=>{

  if (error) {
    callback('unabale to fetch weather data from forecast.io');
  }
  else if (response.statuscode===400) {
    callback('unabale to connect to google servers');
  }else
  {
    callback(undefined,
      {
        temperature:body.currently.temperature,
      apparentTemperature:body.currently.apparentTemperature});

   }

})
}


module.exports.getweather =
   getweather;
