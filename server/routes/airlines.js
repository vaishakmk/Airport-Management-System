const router = require('express').Router();
// const checkAuth = require('../middleware/check-auth');
const AirlinesController = require('../controllers/airlines');

router.get('/', AirlinesController.get_airlines);

router.post('/add', AirlinesController.add_airlines);


router.delete('/:_id', AirlinesController.delete_airlines);

router.post('/update/:_id', AirlinesController.update_airlines);

module.exports = router;