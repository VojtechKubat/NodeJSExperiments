/* @flow */

import { MongoClient } from 'mongodb';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
    if (error) {
        console.log('> ERRROR > Unable to connect ot MongoDB server:', error);
        return;
    }
    console.log('> SUCCESS > connected to MongoDB server');
});