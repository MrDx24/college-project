const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    eventsName: { type: String, required: true },
    eventLocation: { type: String, required: true },
    eventType: { type: String, required: true },
    eventDate: { type: String, required: true },
    eventTime: { type: String, required: true } ,
});

module.exports = mongoose.model('Events', eventsSchema);

