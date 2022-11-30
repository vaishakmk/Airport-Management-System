import React, {useState, useEffect, useContext} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

export default function Register() {
    
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password,setPassword] = useState(null);
  const [type,setType] = useState(null);

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
  }


  

  return (
    // <div className="form">
    //   <div className="form-body">
    //     <div className="username">
    //       <label className="form__label" for="name">
    //         {" "}
    //         Name{" "}
    //       </label>
    //       <input
    //         className="form__input"
    //         type="text"
    //         value={name}
    //         onChange={(e) => handleInputChange(e)}
    //         id="name"
    //         placeholder="First Name & Last Name"
    //       />
    //     </div>

    //     <div className="email">
    //       <label className="form__label" for="email">
    //         Email{" "}
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         className="form__input"
    //         value={email}
    //         onChange={(e) => handleInputChange(e)}
    //         placeholder="Email"
    //       />
    //     </div>
    //     <div className="phone">
    //       <label className="form__label" for="phone">
    //         Phone
    //       </label>
    //       <input
    //         type="text"
    //         name=""
    //         id="phone"
    //         value={phone}
    //         className="form__input"
    //         onChange={(e) => handleInputChange(e)}
    //         placeholder="Phone"
    //       />
    //     </div>
    //     <div className="password">
    //       <label className="form__label" for="password">
    //         Password{" "}
    //       </label>
    //       <input
    //         className="form__input"
    //         type="password"
    //         id="password"
    //         value={password}
    //         onChange={(e) => handleInputChange(e)}
    //         placeholder="Password"
    //       />
    //     </div>
        
    <>
    <h1>Registration Page</h1>
    

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
                
                <Link to="/login">Submit</Link>
            </Button>
          </Form>
        
          </>
  );       
  }

