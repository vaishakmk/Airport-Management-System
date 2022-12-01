const router = require('express').Router();

const AirportEmployeeController = require('../controllers/airport_employee');
// const checkAuth = require('../middleware/check-auth');

router.get('/gates', AirportEmployeeController.get_gates);

router.post('/gates', AirportEmployeeController.set_gates);

router.get('/arrival_fights', AirportEmployeeController.get_flights);

router.post('/arrival_fights', AirportEmployeeController.set_baggage);

router.post('/unassign_baggage',AirportEmployeeController.unassign_baggage);

module.exports = router;