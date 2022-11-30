const router = require('express').Router();

let UserController = require('../controllers/users');

router.post("/signup",UserController.signup_page);

router.get("/users",UserController.get_employees);

router.post('/login', UserController.login);

router.delete('/users/:_id',UserController.delete_employee);


module.exports = router;


