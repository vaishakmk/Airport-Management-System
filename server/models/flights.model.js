const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flight_num :{type: String,unique:true,required:true,minLength:5},
    airline: { type: String, required: true , minLength:3},
    start : {type: String, required: true, default: ''},
    destination : {type: String, required: true, default: ''},
    arr_dep : {type: String, default: '',enum:['arrival','departure']},
    gate : {type : String, default: undefined},
    terminal : {type : String, default: undefined},
    flighttime : {type: Number, required: true, default: 0},
    baggage : {type: Number, default:undefined}
  }, {
    timestamps: true,
  });
  
  const Flights = mongoose.model('Flights', flightSchema);
  
  module.exports = Flights;