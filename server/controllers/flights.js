let Flights = require('../models/flights.model');

exports.get_flights = (req, res) => {
    Flights.find()
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error: ' + err));
};



exports.get_next4hr_flights = (req, res) => {
    let curr_time = new Date().toLocaleTimeString('en-US', { hour12: false, 
        hour: "numeric", 
        minute: "numeric"});
    console.log(curr_time);
    let curr_hours = parseInt(curr_time.slice(0, 2));
    let curr_minutes = parseInt(curr_time.slice(3));
    curr_minutes = curr_hours*60 + curr_minutes ;
    Flights.find({flighttime:{$gte:curr_minutes,
        $lte:curr_minutes+240}})
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error: ' + err));
};


exports.get_next2hr_flights = (req, res) => {
    let curr_time = new Date().toLocaleTimeString('en-US', { hour12: false, 
        hour: "numeric", 
        minute: "numeric"});
    console.log(curr_time);
    let curr_hours = parseInt(curr_time.slice(0, 2));
    let curr_minutes = parseInt(curr_time.slice(3));
    curr_minutes = curr_hours*60 + curr_minutes ;
    Flights.find({flighttime:{$gte:curr_minutes,
        $lte:curr_minutes+120}})
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error: ' + err));
};





exports.delete_flight = (req, res) => {
    Flights.findByIdAndDelete(req.params._id)
    .then(() => res.json('Flight deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};


