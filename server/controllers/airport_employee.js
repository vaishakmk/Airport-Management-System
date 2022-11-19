let Gates = require('../models/gates.model');
let Flights = require('../models/flights.model');


exports.get_gates = (req, res) => {
    Gates.find()
    .then(gates => res.json(gates))
    .catch(err => res.status(400).json('Error: ' + err));
};


exports.set_gates = (req,res) =>{
    let gate_status = req.body.gate_status;

    Gates.findOne({gate_num:req.body.gate_num,terminal:req.body.terminal})
    .exec()
    .then(this_gate => {
        
        if(this_gate.status==='Occupied'){
            res.status(409).json({"message":"This gate is currently Occupied"});
            return;
        }
        else{
            this_gate.gate_status = gate_status;
            this_gate.save()
              .then(() => res.json('Gate Status Modified'))
              .catch(err => res.status(400).json('Error: ' + err));
            return;
        }
    })
    .catch(err => res.status(404).json({error : 'Please provide correct terminal and gate info' }));
    return;     
}
