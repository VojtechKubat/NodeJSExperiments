import mongoose from 'mongoose';

mongoose.Promise = global.Promise;      // configuration of mognoose behavior -> it will work with promises
mongoose.connect('mongodb://localhost:27017/TodoApp');


// mongoose model definition
var Todo = mongoose.model('Todo',
    {
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
newTodo.save()
.then(
    (doc) => {
        console.log('New todo saved by mongoose:\n', doc);
    }
)
.catch(
    (err) => {
        console.log('Error - Unable to save todo');
    }
)