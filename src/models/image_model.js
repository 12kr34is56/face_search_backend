const {Schema, model} = require('mongoose');

const imageSchema = new Schema({
    name: {
        type: String,
        default: 'Untitled'
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No description'
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Image', imageSchema);