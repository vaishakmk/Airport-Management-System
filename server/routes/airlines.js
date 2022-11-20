const router = require('express').Router();
const Airlines = require('../models/airlines.model');
const checkAuth = require('../middleware/check-auth');
const AirlinesController = require('../controllers/airlines');

router.get('/',checkAuth,AirlinesController.get_airlines);

router.post('/add',checkAuth,AirlinesController.add_airlines);


router.delete('/:_id',checkAuth,AirlinesController.delete_airlines);

router.post('/update/:aid',checkAuth,AirlinesController.update_airlines);

module.exports = router;