/* @flow */

import { MongoClient, ObjectID } from 'mongodb';

var obj = new ObjectID();
console.log('My object ID',obj);

MongoClient.connect('mongodb://localhost:27017', (error, client)=>{
    if (error) {
        console.log('> ERRROR > Unable to connect ot MongoDB server:', error);
        return;
    }
    
    console.log('> SUCCESS > connected to MongoDB server');

    var now = new Date().toString();

    var todoObj = {
        text: 'NEW THING TO DO',
        completed: false,
        // created: `${now}`,
        // lastUpdate: `${now}`
    };

    var db = client.db('TodoApp');
 
    db.collection('todos')
    .insertOne(
        todoObj,
        (error, result) => {
        if (error) {
            return console.log('>>> ERROR - insert one >>>', error);
        }
        console.log('Result:', result.ops);
        console.log('Created at:', result.ops[0]._id.getTimestamp());
    });

    client.close();
});