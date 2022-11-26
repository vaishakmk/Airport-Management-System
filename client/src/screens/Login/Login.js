

import React, { Component,useState } from 'react';
import { Redirect,useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [type,setType] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            email: username,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        if(data.usertype){
            //print user type
            // navigate("/register", { replace: true });    

            //switch case for user type
            switch(data.usertype){
                case "passenger":
                    navigate("/register", { replace: true });
                    break;
                case "airport_employee":
                    navigate("/register", { replace: true });
                    break;
                case "airline_employee":
                    navigate("/register", { replace: true });
                    break;               
            }


        }
    })
    .catch(err => console.log(err));

    // const configuration = {
    //     method: "post",
    //     url: "http://localhost:5001/login",
    //     data: {
    //       email: username,
    //       password,
    //     },
    //   };    

    //   axios(configuration)
    //   .then((result) => {
    //     navigate("/register", { replace: true })
    //   })
    //   .catch((error) => {
    //     error = new Error();
    //   });
            
    }    

    
 return (
    <div>      
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Id </Form.Label>
                <Form.Control type="text" placeholder="Enter Email" onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder=" Enter Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form> 
    </div>
    )
}
