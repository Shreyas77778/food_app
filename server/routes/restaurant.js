const express = require('express');
const router = express.Router();
const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantsInRadius,
  uploadRestaurantPhoto
} = require('../controllers/restaurant');

const { protect, authorize } = require('../middleware/auth');

// Include other resource routers
const menuRouter = require('./menu');
const reviewRouter = require('./reviews');

// Re-route into other resource routers
router.use('/:restaurantId/menu', menuRouter);
router.use('/:restaurantId/reviews', reviewRouter);

// Public routes
router.route('/radius/:zipcode/:distance').get(getRestaurantsInRadius);
router.route('/').get(getRestaurants);
router.route('/:id').get(getRestaurant);

// Protected routes (require authentication)
router.route('/').post(protect, authorize('owner', 'admin'), createRestaurant);
router.route('/:id').put(protect, authorize('owner', 'admin'), updateRestaurant);
router.route('/:id').delete(protect, authorize('owner', 'admin'), deleteRestaurant);
router.route('/:id/photo').put(protect, authorize('owner', 'admin'), uploadRestaurantPhoto);

module.exports = router;