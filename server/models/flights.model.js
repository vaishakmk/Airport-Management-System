const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    fid: Schema.Types.ObjectId,
    flight_num :{type: String,unique:true,required:true,minLength:5},
    airline: { type: String, required: true , minLength:3},
    start : {type: String, default: ''},
    destination : {type: String, default: ''},
    arr_dep : {type: String, default: '',enum:['arrival','departure']},
    gate : {type : Number, default: undefined},
    flighttime : {type: Number, default: 0},
    baggage : {type: Number, default:undefined}
  }, {
    timestamps: true,
  });
  
  const Flights = mongoose.model('Flights', flightSchema);
  
  module.exports = Flights;