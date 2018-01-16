import mongoose from 'mongoose';

mongoose.Promise = global.Promise;                      // configuration of mognoose behavior -> it will work with promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
// export default mongoose;