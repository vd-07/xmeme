const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    },
    caption : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now   
    }
});

module.exports = mongoose.model('Posts', PostSchema);

