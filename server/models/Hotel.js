const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    guests: { type: Number, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
});

module.exports = mongoose.model('Hotel', hotelSchema);
