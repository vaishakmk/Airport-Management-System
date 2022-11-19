let Gates = require('../models/gates.model');

exports.get_gates = (req, res) => {
    Gates.find()
    .then(gates => res.json(gates))
    .catch(err => res.status(400).json('Error: ' + err));
};


exports.add_gates = (req, res) => {
    const gate_num = req.body.gate_num;
    const terminal = req.body.terminal;
    const gate_status = req.body.gate_status;
    const newGate = new Gates({
        gate_num,
        terminal,
        gate_status
    });
  
    newGate.save()
    .then(() => res.json('Gate added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  };
