import express from 'express';
import bodyParser from 'body-parser';

import mongoose from './db/mongoose';
import Todo from './models/todo'

var app = express();

// using third party middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log('Request body:', req.body);         // body is available because of bodyParser middleware
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(
        (doc)=>{
            res.send(doc);
        },
        (err)=>{
            res.status(400).send(err);
            console.log('>>> Error', err);
        }
    );
});


app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// create new todo document based on related model
// var newTodo = new Todo({
//     text: '  abcdefg ',
//     // completed: true,         // we have a default value
//     completedAt: 156478
// });

// // save it to the database
// newTodo.save()
// .then(
//     (doc) => {
//         console.log('New todo saved by mongoose:\n', doc);
//     }
// )
// .catch(
//     (err) => {
//         console.log('Error - Unable to save todo', err);
//     }
// )


// mongoose.disconnect();