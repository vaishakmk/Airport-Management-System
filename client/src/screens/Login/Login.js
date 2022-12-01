

import React, { Component,useState } from 'react';
import { Redirect,useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from "axios";


export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [type,setType] = useState(null);
  const [authFailed, setAuthFailed] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            email: username,
            password: password
        })
    })
    .then(res => {
            console.log(res)
            if(res.status === 401){
                setAuthFailed(true);
                // throw new Error('Unauthorized');
            }
        return res.json();
        }

    )
    .then(data => {
       
       
        console.log(data.usertype)
        if(data.usertype){
            //print user type
            // navigate("/register", { replace: true });    

            //switch case for user type
            switch(data.usertype){
                case "passenger":
                    navigate("/dashboard", { replace: true });
                    break;
                case "airport_employee":
                    navigate("/airport", { replace: true });
                    break;
                case "airline_employee":
                    var path = `/airline/${data.airline_name}`;
                    console.log(path)
                    navigate(path, { replace: true });
                    break;               
            }
            localStorage.setItem("token", data.token);

        }
    })
    .catch(err => console.log(err));
            
    }    

    
 return (
    <div>   
        <h2>Login Page</h2>   
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
            {authFailed && <Alert variant="danger">Invalid Credentials</Alert>}
    </div>
    )
}
