import express from 'express';
import hbs from 'hbs';

var app = express();

// setting hbs (handlebars) as template engine - it will look for 'views' subfolder
app.set('view engine', 'hbs');
// redefines view property, because we're using babel and exporting js files into dist folder
app.set('views', __dirname+'/views');      
// 'static' is a build-in express middleware; it serves all the files within the defined forlders on their respective routes
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
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
        welcomeText : 'Welcome to the home page',
        title : 'Home',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    // res.send('<h1>About page</h1>');

    // this uses handlebars
    res.render('about.hbs', {
        title : 'About page',
        currentYear: new Date().getFullYear()
    });        
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'Error - page does not exist.'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});