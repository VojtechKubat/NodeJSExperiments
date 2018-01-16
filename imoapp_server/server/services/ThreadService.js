import mongoose from '../db/mongoose';
import Thread from '../model/Thread';

export const getAllThreads = (req, res) => {
    console.log('getAllThreads');   
    
    Thread.find().then(
        (doc)=>{
            res.send({
                doc,
                code: 'success'
            });
        },
        (err)=>{
            res.status(400).send(err);
            console.log('>>> Error', err);            
        }
    );

}

export const getgetThreadById = (req, res, id) => {
    console.log('getgetThreadById', id);   
}