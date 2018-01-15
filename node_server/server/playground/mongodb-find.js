/* @flow */

import { MongoClient, ObjectID } from 'mongodb';

// var obj = new ObjectID();
// console.log('My object ID',obj);

MongoClient.connect('mongodb://localhost:27017', (error, client)=>{
    if (error) {
        console.log('> ERRROR > Unable to connect ot MongoDB server:', error);
        return;
    }
    
    console.log('> SUCCESS > connected to MongoDB server');

    var db = client.db('TodoApp');
    db.collection('todos')
    // .find({completed: false})
    // .find({_id: new ObjectID('5a4bd620f0583cec09d4e164')})
    .find({},{limit: 2, skip: 3})
    .toArray()
    .then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    })
    .catch((err) => {
        console.log('Unable to fetch todos, err');
    });

    db.collection('todos')
    .find()
    .count()
    .then((count) => {
        console.log('Todos total count:', count);
        // console.log(JSON.stringify(docs, undefined, 2));
    })
    .catch((err) => {
        console.log('Unable to fetch todos, err');
    });

    client.close();
});