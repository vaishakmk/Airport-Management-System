let Airlines = require('../models/airlines.model');



exports.get_airlines = (req, res) => {
    Airlines.find()
    .then(airline => res.json(airline))
    .catch(err => res.status(400).json('Error: ' + err));
};


exports.add_airlines = (req, res) => {
    const airline_name = req.body.airline_name;
    const newAirline = new Airlines({airline_name});

    newAirline.save()
    .then(() => res.json('Airline added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  };


exports.delete_airlines = (req, res) => {
    Airlines.findByIdAndDelete(req.params.aid)
    .then(() => res.json('Airline deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.update_airlines = (req, res) => {
    Airlines.findById(req.params.aid)
    .then(airline => {
        airline.airline_name = req.body.airline_name;
        
        airline.save()
        .then(() => res.json('Airline updated!'))
    .   catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};