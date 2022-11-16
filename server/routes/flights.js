const router = require('express').Router();

const FlightsController = require('../controllers/flights');
const checkAuth = require('../middleware/check-auth');

router.get('/',FlightsController.get_flights);

router.post('/add',checkAuth, FlightsController.add_flights);


router.delete('/:fid',checkAuth, FlightsController.delete_flight);

router.post('/update/:fid',checkAuth,FlightsController.update_flight);

module.exports = router;