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
    console.log("current time",curr_minutes+180);
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
                    gate[random].save()
                    .then(() => console.log(`Gate assigned for flight ${flight}`))
                    .catch(err => res.status(400).json('Error: ' + err));
                    
                })
                .catch(err => {
                    res.status(404).json('No free gates found');
                    return;
                });
            }
        }
        console.log('Gates assigned successively');
        res.status(200).json(upcoming_flights);    
        return;    
    })
    .catch(err => res.status(400).json('Error: ' + err)); 
    return; 
};




exports.gate_unassignment = (req,res)=>{
    let curr_time = new Date().toLocaleTimeString('en-US', { hour12: false, 
    hour: "numeric", 
    minute: "numeric"});
    console.log(curr_time);
    let curr_hours = parseInt(curr_time.slice(0, 2));
    let curr_minutes = parseInt(curr_time.slice(3));
    curr_minutes = curr_hours*60 + curr_minutes ;
    console.log(curr_minutes-30);
    Flights.find({flighttime:{$lte:curr_minutes-30}})
    .then(pastflights => {
        for (let flight of pastflights)
        {
            if(flight.gate!==undefined)
            {
                Gates.findOneAndUpdate({gate_num: flight.gate}, {$set:{gate_status:"UnOccupied"}}, {new: true}, (err, doc) => {
                    if (err) 
                    {
                        console.log("Something wrong when updating gate data!");
                    }
                    console.log(doc);
                });
                flight.gate=undefined;
                flight.terminal=undefined;
                flight.save()
                .then(() =>  console.log(`Gate un-assigned for flight ${flight.flight_num}`))
                .catch(err => {
                    res.status(404).json(err+' : No free gates found');
                    return;
                });
            }
        }
        console.log('Gates un-assigned successively');
        res.status(200).json(pastflights);    
        return;     
    })
    .catch(error => res.status(400).json(error+' : Error querying from flights model'));
};