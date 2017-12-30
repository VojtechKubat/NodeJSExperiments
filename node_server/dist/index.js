'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _hbs = require('hbs');

var _hbs2 = _interopRequireDefault(_hbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// setting hbs (handlebars) as template engine - it will look for 'views' subfolder
app.set('view engine', 'hbs');
// redefines view property, because we're using babel and exporting js files into dist folder
app.set('views', __dirname + '/views');
// 'static' is a build-in express middleware; it serves all the files within the defined forlders on their respective routes
app.use(_express2.default.static(__dirname + '/public'));

app.get('/', function (req, res) {
    // console.log('-------------------\nrequest:\n-------------------\n', req);
    console.log('Request for /');
    // res.send('<h1>Hello world</h1>');
    // res.send({
    //     firstname: 'John',
    //     lastname: 'Doe',
    //     likes: [
    //         'biking',
    //         'cities'
    //     ]
    // });
    res.render('home.hbs', {
        welcomeText: 'Welcome to the home page',
        title: 'Home',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', function (req, res) {
    // res.send('<h1>About page</h1>');

    // this uses handlebars
    res.render('about.hbs', {
        title: 'About page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', function (req, res) {
    res.send({
        error: 'Error - page does not exist.'
    });
});

app.listen(3000, function () {
    console.log('Server is up on port 3000');
});
//# sourceMappingURL=index.js.map