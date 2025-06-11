const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    availableSizes: [{
        type: String
    }],
    reviews: [{
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        text: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    collection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema); 