/* @flow */

import express from 'express';
import hbs from 'hbs';
import fs from 'fs';

var app = express();
var underconstruction = true;

hbs.registerPartials(__dirname+'/views/partials');

// setting hbs (handlebars) as template engine - it will look for 'views' subfolder
app.set('view engine', 'hbs');
// redefines view property, because we're using babel and exporting js files into dist folder
app.set('views', __dirname+'/views');      

// app.use()

// custom middleware
app.use((req: Request, res, next) => {
    var now = new Date().toString();
    var log = `> ${now} : ${req.method} - ${req.url}`;

    fs.appendFile('server.log', log + '\n', (error) => {
        if (error) {
            console.log('Cannot append to server.log')
        }
    });
    console.log(log);
    next();
});

app.use((req: Request, res, next) => {
    if (underconstruction) {
        res.render('underconstruction');
    } else {
        next();
    }
});

// 'static' is a build-in express middleware; it serves all the files within the defined forlders on their respective routes
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear();            // this is used for partials
    // return 3000;
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();                  // helper, which takes a parameter - see home.hbs
});

app.get('/about', (req: Request, res) => {
    // console.log('Request for /about');
    // res.send('<h1>About page</h1>');

    // this uses handlebars
    res.render('about.hbs', {
        title : 'A About page'
        // currentYear: new Date().getFullYear()            // registerHelper makes this property unnecessary, since it is displayed on a partial
    });        
});

app.get('/bad', (req: Request, res) => {
    // console.log('Request for /bad');
    res.send({
        error: 'Error - page does not exist.'
    });
})

app.get('/', (req: Request, res) => {
    // console.log('Request for /');
    
    res.render('home.hbs', {
        welcomeText : 'Welcome to the home page',
        title : 'A Home'
        // currentYear: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});