const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const airline_employeeSchema = new Schema({
    aeid: Schema.Types.ObjectId,
    airline: { type: String, required: true },
    empname : {type: String, required : true, maxLength:50 },
    email: {type: String,
        required: true, 
        unique: true ,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    phone : {type:String, required : true, maxLength:10 },
    password : {type: String,required: true }
}, {
    timestamps: true,
  });
  
  const AirlineEmployee = mongoose.model('AirlineEmployee', airline_employeeSchema);
  
  module.exports = AirlineEmployee;