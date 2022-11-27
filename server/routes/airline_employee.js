const router = require('express').Router();
// const checkAuth = require('../middleware/check-auth');

let AirlineEmployeeController = require('../controllers/airlines_employee');


router.get('/flights/:airline',AirlineEmployeeController.airline_flights);

router.post('/add_flights', AirlineEmployeeController.add_flights);

router.post('/update_flights/:_id', AirlineEmployeeController.update_flight);

// router.post('/update_flights', AirlineEmployeeController.update_flights);

// router.delete('/:uid',AirlineEmployeeController.delete_employee);


module.exports = router;


