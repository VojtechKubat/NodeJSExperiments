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
    // db.collection('todos')
    // // .find({completed: false})
    // // .find({_id: new ObjectID('5a4bd620f0583cec09d4e164')})
    // .find()
    // .toArray()
    // .then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // })
    // .catch((err) => {
    //     console.log('Unable to fetch todos, err');
    // });

    db.collection('todos').find().count().then(function (count) {
        console.log('Todos:', count);
        // console.log(JSON.stringify(docs, undefined, 2));
    }).catch(function (err) {
        console.log('Unable to fetch todos, err');
    });

    client.close();
});
//# sourceMappingURL=mongodb-find.js.map