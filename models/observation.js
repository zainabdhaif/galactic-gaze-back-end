const mongoose = require('mongoose');

const observationSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    eventid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event', 
        required: true
    },
    visibility: {
        type: String,
        required: true
      },
    notes: {
        type: String,
        required: true
    },


});


module.exports = mongoose.model('Observation', observationSchema);