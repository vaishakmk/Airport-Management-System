const router = require('express').Router();
// const Airlines = require('../models/airlines.model');
const AirportEmployeeController = require('../controllers/airport_employee');
const checkAuth = require('../middleware/check-auth');

// router.get('/get_gates',checkAuth,AirportEmployeeController.get_gates);

// router.post('/add',checkAuth,AirlinesController.add_airlines);


// router.delete('/:aid',checkAuth,AirlinesController.delete_airlines);

// router.post('/update/:aid',checkAuth,AirlinesController.update_airlines);

module.exports = router;