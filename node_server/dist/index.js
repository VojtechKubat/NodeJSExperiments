'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _hbs = require('hbs');

var _hbs2 = _interopRequireDefault(_hbs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var underconstruction = true;

_hbs2.default.registerPartials(__dirname + '/views/partials');

// setting hbs (handlebars) as template engine - it will look for 'views' subfolder
app.set('view engine', 'hbs');
// redefines view property, because we're using babel and exporting js files into dist folder
app.set('views', __dirname + '/views');

// app.use()

// custom middleware
app.use(function (req, res, next) {
    var now = new Date().toString();
    var log = '> ' + now + ' : ' + req.method + ' - ' + req.url;

    _fs2.default.appendFile('server.log', log + '\n', function (error) {
        if (error) {
            console.log('Cannot append to server.log');
        }
    });
    console.log(log);
    next();
});

app.use(function (req, res, next) {
    if (underconstruction) {
        res.render('underconstruction');
    } else {
        next();
    }
});

// 'static' is a build-in express middleware; it serves all the files within the defined forlders on their respective routes
app.use(_express2.default.static(__dirname + '/public'));

_hbs2.default.registerHelper('currentYear', function () {
    return new Date().getFullYear(); // this is used for partials
    // return 3000;
});

_hbs2.default.registerHelper('screamIt', function (text) {
    return text.toUpperCase(); // helper, which takes a parameter - see home.hbs
});

app.get('/about', function (req, res) {
    // console.log('Request for /about');
    // res.send('<h1>About page</h1>');

    // this uses handlebars
    res.render('about.hbs', {
        title: 'A About page'
        // currentYear: new Date().getFullYear()            // registerHelper makes this property unnecessary, since it is displayed on a partial
    });
});

app.get('/bad', function (req, res) {
    // console.log('Request for /bad');
    res.send({
        error: 'Error - page does not exist.'
    });
});

app.get('/', function (req, res) {
    // console.log('Request for /');

    res.render('home.hbs', {
        welcomeText: 'Welcome to the home page',
        title: 'A Home'
        // currentYear: new Date().getFullYear()
    });
});

app.listen(3000, function () {
    console.log('Server is up on port 3000');
});
//# sourceMappingURL=index.js.map