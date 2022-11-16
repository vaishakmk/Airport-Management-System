const router = require('express').Router();

let AirlineEmployeeController = require('../controllers/airlines_employee');

router.post("/signup",AirlineEmployeeController.signup_page);

router.get('/',AirlineEmployeeController.get_employees);

router.post('/login', AirlineEmployeeController.login);

router.delete('/:aeid',AirlineEmployeeController.delete_employee);


module.exports = router;


