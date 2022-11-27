const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const airlineSchema = new Schema({
    airline_name: { type: String, unique: true, required: true , minLength:3},
    airline_domain : {type : String, unique: true, required: true , minLength:3}
  }, {
    timestamps: true,
  });
  
  const Airlines = mongoose.model('Airlines', airlineSchema);
  
  module.exports = Airlines;