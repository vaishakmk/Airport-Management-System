import React, {useState, useEffect, useContext} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

export default function Register() {
    
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password,setPassword] = useState(null);
  const [type,setType] = useState(null);
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "name"){
          console.log("🚀 ~ file: Register.js ~ line 18 ~ handleInputChange ~ value", value)
          setName(value);
          
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "phone"){
        setPhone(value);
    }
      if(id === "password"){
        setPassword(value);
      }
      if(id === "type"){
        console.log("🚀 ~ file: Register.js ~ line 32 ~ handleInputChange ~ value", value)

          setType(value);
                }

  }

  const handleSubmit  = () => {
    // event.preventDefault();
    console.log("sadfsf",type);
      
      fetch(`http://localhost:5001/signup`, {
          method: "POST",
          body: JSON.stringify({
              empname: name,
              email: email,
              phone: phone,
              password: password,
              usertype: type
              
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
          .then(response => response.json())
          navigate("/login", { replace: true });
  }


  

  return (
   

    <>
    <h2>Registration Page</h2>
    

<Form onSubmit={handleSubmit}>
<Form.Group controlId="formBasicEmail">
                <Form.Label>Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Name" onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email ID </Form.Label>
                <Form.Control type="text" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder=" Enter Phone Number" onChange={e => setPhone(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder=" Enter Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
          <Form.Group controlId="type">
            <Form.Check
              value="passenger"
              type="radio"
              aria-label="Passenger"
              label="Passenger"
              onChange={(e) => handleInputChange(e)}
              checked={type === "passenger"}
            />
            <Form.Check
              value="airline_employee"
              type="radio"
              aria-label="Airline Employee"
              label="Airline Employee"
              onChange={(e) => handleInputChange(e)}
              checked={type === "airline_employee"}
            />
            <Form.Check
              value="airport_employee"
              type="radio"
              aria-label="Airport Employee"
              label="Airport Employee"
              onChange={(e) => handleInputChange(e)}
              checked={type === "airport_employee"}
            />
          </Form.Group>
          
          
          <Button variant="primary" type="submit">
                
               Submit
            </Button>
          </Form>
        
          </>
  );       
  }

