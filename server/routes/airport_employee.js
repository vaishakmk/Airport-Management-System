const router = require('express').Router();

const AirportEmployeeController = require('../controllers/airport_employee');
const checkAuth = require('../middleware/check-auth');

router.get('/gates',checkAuth,AirportEmployeeController.get_gates);

router.post('/gates',checkAuth,AirportEmployeeController.set_gates);

router.get('/arrival_fights',checkAuth,AirportEmployeeController.get_flights);

router.post('/arrival_fights',checkAuth,AirportEmployeeController.set_baggage);
module.exports = router;