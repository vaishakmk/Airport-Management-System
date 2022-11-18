let Users = require('../models/users.model');
let Airlines = require('../models/airlines.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.signup_page = (req,res )=>{
    Users.find({email:req.body.email})
        .exec()
        .then(user => {
            if(user.length>=1){
                res.status(409).json({"message":"User exists. Try another username"});
            }else{
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    if(err) {
                        return res.status(500).json({
                            error:err
                        });
                    }else{
                        
                        const user = new Users({
                            uid : new mongoose.Types.ObjectId(),
                            empname :req.body.empname,
                            email: req.body.email,
                            phone : req.body.phone,
                            password : hash,
                            usertype : req.body.usertype
                        });
                        user
                            .save()
                            .then(result=>{
                                console.log(result);
                                res.status(200).json({
                                    message :  `${req.body.usertype} added`
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
    Users.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
}; 



exports.login = (req,res,next)=>{
    Users.find({email : req.body.email})
        .exec()
        .then(user => {
            if(user.length <1){
                return  res.status(401).json({
                    message : "Auth Failed"
                });
            }
            bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                if (err){
                    return res.status(401).json({message:"Auth Failed"});
                }
                if (result){
                    const token = jwt.sign({
                        email : user[0].email,
                        uid : user[0].uid
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn : '1h'
                    });
                    if(user[0].usertype==='airline_employee'){
                        const domain = user[0].email.split("@")[1];
                        console.log(domain);
                        Airlines.findOne({airline_domain:domain}).exec().then(airline =>{
                            console.log(airline.airline_name);
                            res.status(200).json({
                                message:"Auth Successful",
                                usertype : user[0].usertype ,
                                airline_name : airline.airline_name,
                                token : token});
                            });
    
                    }
                    else{
                        res.status(200).json({
                            message:"Auth Successful",
                            usertype : user[0].usertype ,
                            token : token});

                    }
                    return;
                    
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
    Users.deleteOne({ uid: req.params.uid })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Used removed"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
