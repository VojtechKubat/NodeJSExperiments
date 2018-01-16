import mongoose from 'mongoose';
var Thread = mongoose.model('Todo',
    {
        firstComment: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        },
        visible: {
            type: Boolean,
            default: true
        },
        score: {
            type: Number,
            default: 0
        },
        op: {
            type: String,
            required: true,
            default: 'n/a'      // TODO - remove default value
        }
    });

export default Thread;