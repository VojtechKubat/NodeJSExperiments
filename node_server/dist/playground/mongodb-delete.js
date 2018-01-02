'use strict';

var _mongodb = require('mongodb');

// var obj = new ObjectID();
// console.log('My object ID',obj);

_mongodb.MongoClient.connect('mongodb://localhost:27017', function (error, client) {
    if (error) {
        console.log('> ERRROR > Unable to connect ot MongoDB server:', error);
        return;
    }

    console.log('> SUCCESS > connected to MongoDB server');

    var db = client.db('TodoApp');

    // delete many
    // db.collection('todos').deleteMany({text: "Something to do"})
    // .then((result) => {
    //     console.log('Delete many:\n', result);
    // });

    // delete one
    // db.collection('todos').deleteOne({text: 'Hello world'})
    // .then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    console.log('findOneAndDelete - text == Hello world');
    db.collection('todos').findOneAndDelete({ text: 'Hello world' }).then(function (result) {
        console.log(result);
    });

    client.close();
});
//# sourceMappingURL=mongodb-delete.js.map