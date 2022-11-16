let AirlineEmployees = require('../models/airline_employee.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.signup_page = (req,res )=>{
    AirlineEmployees.find({email:req.body.email})
        .exec()
        .then(airline_employees => {
            if(airline_employees.length>=1){
                res.status(409).json({"message":"User exists. Try another username"});
            }else{
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    if(err) {
                        return res.status(500).json({
                            error:err
                        });
                    }else{
                        const airlineemployee = new AirlineEmployees({
                            aeid : new mongoose.Types.ObjectId(),
                            airline: req.body.airline,
                            empname :req.body.empname,
                            email: req.body.email,
                            phone : req.body.phone,
                            password : hash
                        });
                        airlineemployee
                            .save()
                            .then(result=>{
                                console.log(result);
                                res.status(200).json({
                                    message : "Airline Employee added"
                                });
                            })
                            .catch(err =>{
                                console.log(err);
                                res.status(500).json({
                                    error : err
                                });
                            }); 
                    }
                })
            }
        });
};



exports.get_employees = (req, res) => {
    AirlineEmployees.find()
    .then(airline_employee => res.json(airline_employee))
    .catch(err => res.status(400).json('Error: ' + err));
}; 



exports.login = (req,res,next)=>{
    AirlineEmployees.find({email : req.body.email})
        .exec()
        .then(airlineemployee => {
            if(airlineemployee.length <1){
                return  res.status(401).json({
                    message : "Auth Failed"
                });
            }
            bcrypt.compare(req.body.password,airlineemployee[0].password,(err,result)=>{
                if (err){
                    return res.status(401).json({message:"Auth Failed"});
                }
                if (result){
                    const token = jwt.sign({
                        email : airlineemployee[0].email,
                        aeid : airlineemployee[0].aeid

                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn : '1h'
                    });
                    return res.status(200).json({
                        message:"Auth Successful",
                        token : token});
                }
                res.status(401).json({message:"Auth Failed"});
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
  };


exports.delete_employee = (req, res) => {
    AirlineEmployees.deleteOne({ aeid: req.params.aeid })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Airline employee removed"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
