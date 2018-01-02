'use strict';

var _mongodb = require('mongodb');

var obj = new _mongodb.ObjectID();

console.log('My object ID', obj);

_mongodb.MongoClient.connect('mongodb://localhost:27017', function (error, client) {
    if (error) {
        console.log('> ERRROR > Unable to connect ot MongoDB server:', error);
        return;
    }

    console.log('> SUCCESS > connected to MongoDB server');

    // var now = new Date().toString();

    // var todoObj = {
    //     text: 'Something to do',
    //     completed: false,
    //     // created: `${now}`,
    //     // lastUpdate: `${now}`
    // };

    // var db = client.db('TodoApp');

    // db.collection('todos').insertOne(todoObj, 
    //     (error, result) => {
    //     if (error) {
    //         console.log('>>> ERROR - insert one >>>', error);
    //     }
    //     console.log('Result:', result.ops[0]._id);
    //     console.log('Created at:', result.ops[0]._id.getTimestam());
    // });

    client.close();
});
//# sourceMappingURL=mongodb-connect.js.map