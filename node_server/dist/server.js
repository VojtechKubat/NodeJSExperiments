'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('./db/mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _todo = require('./models/todo');

var _todo2 = _interopRequireDefault(_todo);

var _mongodb = require('mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// using third party middleware
app.use(_bodyParser2.default.json());

app.post('/todos', function (req, res) {
    console.log('Request body:', req.body); // body is available because of bodyParser middleware
    var todo = new _todo2.default({
        text: req.body.text
    });
    todo.save().then(function (doc) {
        res.send(doc);
    }, function (err) {
        res.status(400).send(err);
        console.log('>>> Error', err);
    });
});

app.get('/todos', function (req, res) {
    _todo2.default.find().then(function (doc) {
        res.send({
            doc: doc,
            code: 'success'
        });
    }, function (err) {
        res.status(400).send(err);
        console.log('>>> Error', err);
    });
});

app.get('/todos/:id', function (req, res) {
    _todo2.default.find({ _id: new _mongodb.ObjectID(req.params.id) }).then(function (doc) {
        res.send({
            doc: doc,
            code: 'success'
        });
    }, function (err) {
        res.status(400).send(err);
        console.log('>>> Error', err);
    });

    // res.send(req.params);
    // req.params.id
});

app.listen(3000, function () {
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
//# sourceMappingURL=server.js.map