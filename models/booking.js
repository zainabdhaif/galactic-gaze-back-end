const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    meetupid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meetup', 
        required: true
    }
});

module.exports = mongoose.model('Booking', bookingSchema);