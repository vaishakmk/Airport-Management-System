const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    _id: Schema.Types.ObjectId,
    empname : {type: String, required : true, maxLength:50 },
    email: {type: String,
        required: true, 
        unique: true ,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    phone : {type:String, required : true, maxLength:10 },
    password : {type: String,required: true},
    usertype : {type: String, required: true ,enum:['passenger','airline_employee','airport_employee']} 
}
, {
    timestamps: true,
  });
  
  const User = mongoose.model('User', usersSchema);
  
  module.exports = User;