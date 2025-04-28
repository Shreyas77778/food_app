const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  cuisine: {
    type: [String],
    required: true,
    enum: [
      'Indian',
      'Chinese',
      'Italian',
      'Mexican',
      'Thai',
      'Japanese',
      'American',
      'Mediterranean'
    ]
  },
  image: String,
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating must can not be more than 5'],
    default: 3
  },
  deliveryTime: {
    type: Number,
    required: [true, 'Please add delivery time in minutes']
  },
  minOrder: {
    type: Number,
    required: [true, 'Please add minimum order amount']
  },
  menu: [{
    category: {
      type: String,
      required: true
    },
    items: [{
      name: {
        type: String,
        required: true
      },
      description: String,
      price: {
        type: Number,
        required: true
      }
    }]
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);