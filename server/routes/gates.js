const router = require('express').Router();

const GatesController = require('../controllers/gates');


router.get('/',GatesController.get_gates);

router.post('/add_gates',GatesController.add_gates);

router.post('/random_assignment',GatesController.gate_assignment);

router.post('/periodic_unassignment',GatesController.gate_unassignment);

// router.delete('/:fid',checkAuth, FlightsController.delete_flight);


module.exports = router;