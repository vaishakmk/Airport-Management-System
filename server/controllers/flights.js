let Flights = require('../models/flights.model');

exports.get_flights = (req, res) => {
    Flights.find()
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error: ' + err));
};





exports.delete_flight = (req, res) => {
    Flights.findByIdAndDelete(req.params._id)
    .then(() => res.json('Flight deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};


