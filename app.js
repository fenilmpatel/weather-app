
const yargs = require('yargs');

const geocode  = require('./geocode.js');
const weather = require('./weather.js')
var argv = yargs
.options(
  {
    a:{
      demand:true,
      alias:'a',
      describe:'address for weather',
      string:true
    }

  }
)
.help()
.alias('help','h')
.argv
geocode.geocodeAddress(argv.address,(errorMessage,results)=>{

if (errorMessage) {
  console.log(errorMessage);
}
else {
  // console.log(results.address);
}

weather.getweather(results.latitude,results.langtitude,(errorMessage,weatherResults)=>{
if(errorMessage){
  console.log(errorMessage);

}
else {
  console.log(`current weather is ${weatherResults.temperature}F.it's fill like ${weatherResults.apparentTemperature}F`)
}
});

});
// dark api :c6ab70e0066490a56e8dfdb177813e8a
