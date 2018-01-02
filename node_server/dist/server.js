'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise; // configuration of mognoose behavior -> it will work with promises
_mongoose2.default.connect('mongodb://localhost:27017/TodoApp');

// mongoose model definition
var Todo = _mongoose2.default.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// save new todo document
var newTodo = new Todo({
    text: 'MONGOOSE RULEZ !!!',
    completed: true,
    completedAt: 156478
});

// save it to the database
newTodo.save().then(function (doc) {
    console.log('New todo saved by mongoose', doc);
}).catch(function (err) {
    console.log('Unable to save todo');
});
//# sourceMappingURL=server.js.map