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
    db.collection('todos').findOneAndUpdate({
        text: 'to_update'
    }, {
        $set: {
            text: 'UPDATED CORRECTLY !!!',
            completed: true
        },
        $inc: {
            age: 6
        }
    }, {
        returnOriginal: false
    }).then(function (result) {
        console.log('UPDATE SUCCESS\n - new document:\n', result);
    }).catch(function (err) {
        console.log('Update error:', err);
    });

    client.close();
});
//# sourceMappingURL=mongodb-update.js.map