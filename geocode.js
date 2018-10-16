
const request = require('request');


 var geocodeAddress = (a,callback) => {
   var uri =encodeURIComponent(a);

   request({
     url:`https://maps.googleapis.com/maps/api/geocode/json?address=${uri}&key=AIzaSyBmT-p47OkFHQCe10KClfGY4hsDqhQj3pw`,
     json:true
 },
 (error,response,body)=>{
   if(error){
  callback('unable to connect google servers');

   }
   else if (body.status==='ZERO_RESULTS') {
     callback('unable to find address');

   }else if(body.status==='OK'){

     callback(undefined,{
       address:body.results[0].formatted_address,
       latitude:body.results[0].geometry.location.lat,
       langtitude:body.results[0].geometry.location.lng
     })
     // console.log('enter address was:');
     // console.log('---------');
     // console.log(`address:${body.results[0].formatted_address}`);
     // console.log(`latitude:${body.results[0].geometry.location.lat}`);
     // setTimeout(()=>{console.log(`langtitude: ${body.results[0].geometry.location.lng}`)},1000)
 }
 })
 }

 module.exports={
   geocodeAddress
 }
