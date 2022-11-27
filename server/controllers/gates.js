let Gates = require('../models/gates.model');
let Flights = require('../models/flights.model');


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


exports.gate_assignment = (req,res)=>{
    let curr_time = new Date().toLocaleTimeString('en-US', { hour12: false, 
    hour: "numeric", 
    minute: "numeric"});
    console.log(curr_time);
    let curr_hours = parseInt(curr_time.slice(0, 2));
    let curr_minutes = parseInt(curr_time.slice(3));
    curr_minutes = curr_hours*60 + curr_minutes ;
    Flights.find({flighttime:{$gte:curr_minutes,
        $lte:curr_minutes+180}})
    .then(upcoming_flights => {
        for (let flight of upcoming_flights){
            console.log(flight.flight_num)
            if(flight.gate===undefined){
                Gates.find({gate_status:'UnOccupied'}).exec()
                .then(gate=>{
                    var random = Math.floor(Math.random() * gate.length);
                    console.log(flight.flight_num,flight.gate);
                    console.log(gate[random].gate_num,gate[random].gate_status);
                    flight.gate = gate[random].gate_num;
                    flight.terminal = gate[random].terminal;
                    gate[random].gate_status = 'Occupied';
                    flight.save();
                    gate[random].save();
                    res.status(200).json('Gates assigned successively');
                    return;

                })
                .catch(err => res.status(404).json({'Error': 'No gate found'}));
                return;
            }
        }    
        res.status(200).json('No flights left to be assigned gates');
        return;    
    })
    .catch(err => res.status(400).json('Error here: ' + err));  
};
