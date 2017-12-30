'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = _yargs2.default.demandOption('address', 'Address').help().alias('address', 'a').string('address').alias('help', 'h').argv;

console.log(argv);
var encodedAddress = "";
if (argv.a !== null && typeof argv.a === 'string') {
    encodedAddress = encodeURIComponent(argv.a);
}

var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress;
console.log(">>> url:", url);
console.log(">>> sending request...");

(0, _request2.default)({
    url: url,
    json: true

}, function (error, response, body) {
    if (error == null) {

        // console.log("Response:", response);

        console.log("Status code:", response.statusCode);
        console.log("Headers:", response.headers);

        console.log("--------------------------------------------------------");
        console.log("Body:", JSON.stringify(body, undefined, 4));
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
//# sourceMappingURL=index.js.map