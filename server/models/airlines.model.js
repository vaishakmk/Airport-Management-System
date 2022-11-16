const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const airlineSchema = new Schema({
    aid: Schema.Types.ObjectId,
    airline_name: { type: String, unique: true, required: true , minLength:3},
  }, {
    timestamps: true,
  });
  
  const Airlines = mongoose.model('Airlines', airlineSchema);
  
  module.exports = Airlines;