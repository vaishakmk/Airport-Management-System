const router = require('express').Router();

const FlightsController = require('../controllers/flights');
const checkAuth = require('../middleware/check-auth');

router.get('/',FlightsController.get_flights);

router.delete('/:fid',checkAuth, FlightsController.delete_flight);


module.exports = router;