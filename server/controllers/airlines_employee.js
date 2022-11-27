let Flights = require('../models/flights.model');



exports.airline_flights = (req, res) => {
    Flights.find({airline:req.params.airline})
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



  exports.update_flight = (req, res) => {
    let curr_time = new Date().toLocaleTimeString('en-US', { hour12: false, 
        hour: "numeric", 
        minute: "numeric"});
    console.log(curr_time);
    let curr_hours = parseInt(curr_time.slice(0, 2));
    let curr_minutes = parseInt(curr_time.slice(3));
    curr_minutes = curr_hours*60 + curr_minutes ;

    Flights.findById(req.params._id)
    .then(flight => {
        const stringtime = req.body.flighttime;
        let hours = parseInt(stringtime.slice(0, 2));
        let minutes = parseInt(stringtime.slice(3));
        const flighttime = hours*60+minutes; 
        console.log(flight.flighttime-curr_minutes);
        if(Math.abs(flight.flighttime-curr_minutes)>30){
            flight.flighttime = flighttime;
            flight.gate=undefined;
            flight.terminal=undefined;
            flight.save()
              .then(() => res.json('Flight time updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
            return;
        }else{
            res.status(400).json({
                error : 'You cannot change the schedule within 30mins of take-off'
            });
            return;
        }

    })
    .catch(err => res.status(400).json('Error: ' + err));
};