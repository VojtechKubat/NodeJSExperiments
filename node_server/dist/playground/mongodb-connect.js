'use strict';

var _mongodb = require('mongodb');

_mongodb.MongoClient.connect('mongodb://localhost:27017/TodoApp', function (error, db) {
    if (error) {
        console.log('> ERRROR > Unable to connect ot MongoDB server:', error);
        return;
    }
    console.log('> SUCCESS > connected to MongoDB server');
});
//# sourceMappingURL=mongodb-connect.js.map