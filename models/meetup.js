const mongoose = require('mongoose');

const meetupSchema = new mongoose.Schema({
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
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
      }],
});


module.exports = mongoose.model('Meetup', meetupSchema);