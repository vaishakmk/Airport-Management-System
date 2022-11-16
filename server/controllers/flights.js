let Flights = require('../models/flights.model');

exports.get_flights = (req, res) => {
    Flights.find()
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.add_flights = (req, res) => {
    const flight_num = req.body.flight_num;
    const airline = req.body.airline;
    const start = req.body.start
    const destination = req.body.destination;
    let arr_dep = ''
    if(start === 'San Jose'){
      arr_dep = 'departure';
    }
    else{
      arr_dep = 'arrival'
    }
  
    const stringtime = req.body.flighttime;
    const hours = parseInt(stringtime.slice(0, 2));
    const minutes = parseInt(stringtime.slice(3));
  
    const flighttime = hours*60+minutes; 
  
    const newFlight = new Flights({
      flight_num,
      airline,
      start,
      destination,
      arr_dep,
      flighttime
    });
  
    newFlight.save()
    .then(() => res.json('Flight added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  };



exports.delete_flight = (req, res) => {
    Flights.findByIdAndDelete(req.params.fid)
    .then(() => res.json('Flight deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};


exports.update_flight = (req, res) => {
    Flights.findById(req.params.fid)
    .then(flight => {
        const stringtime = req.body.flighttime;
        let hours = parseInt(stringtime.slice(0, 2));
        let minutes = parseInt(stringtime.slice(3));
        const flighttime = hours*60+minutes; 
        flight.flighttime = flighttime;
        
        flight.save()
          .then(() => res.json('Flight time updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};