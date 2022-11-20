const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gatesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    gate_num : {type: String, unique : true, required : true},
    terminal : {type: String, required: true },
    gate_status : {type: String, required: true ,default:'Occupied',enum:['Occupied','UnOccupied','ClosedForMaintenance']} 
}
, {
    timestamps: true,
  });
  
  const Gate = mongoose.model('Gate', gatesSchema);
  
  module.exports = Gate;