const router = require('express').Router();

const FlightsController = require('../controllers/flights');
const checkAuth = require('../middleware/check-auth');

router.get('/',FlightsController.get_flights);

router.get('/next4hr',FlightsController.get_next4hr_flights);

router.get('/next2hr',FlightsController.get_next2hr_flights);

router.get('/next1hr',FlightsController.get_next1hr_flights);

router.delete('/:_id',checkAuth, FlightsController.delete_flight);


module.exports = router;