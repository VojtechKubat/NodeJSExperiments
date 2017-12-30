/* @flow */

import request from 'request';
import yargs from 'yargs';

const argv = yargs
    .demandOption('address', 'Address')
    .help()
    .alias('address', 'a')
    .string('address')
    .alias('help', 'h')
    .argv;

console.log(argv);
var encodedAddress = "";
if (argv.a !== null && typeof argv.a === 'string') {
    encodedAddress = encodeURIComponent(argv.a);
}

var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
console.log(">>> url:", url);
console.log(">>> sending request...");

request({ 
    url: url,
    json: true

}, (error, response, body) => {
    if (error == null) {
        
        // console.log("Response:", response);
        
        console.log("Status code:", response.statusCode);
        console.log("Headers:", response.headers);
        
        console.log("--------------------------------------------------------");
        console.log("Body:", JSON.stringify(body,undefined, 4));
        console.log("--------------------------------------------------------");
        if (Array.isArray(body.results) && body.results.length > 0) {
            console.log(">>> Formatted address:", body.results[0].formatted_address);
            console.log(">>> lat:", body.results[0].geometry.location.lat);
            console.log(">>> lng:", body.results[0].geometry.location.lng);
        }
        console.log("--------------------------------------------------------");
    } else {
        console.log("--------------------------------------------------------");
        console.log("Error:", error);
        console.log("--------------------------------------------------------");
    }
    
});