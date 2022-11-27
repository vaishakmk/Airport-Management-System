import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import BaggageTable from '../../components/BaggageTable/BaggageTable';


function BaggageAssignment() {
  const [baggage, setBaggage] = React.useState('')
  const[flight, setFlight] = React.useState('')
  

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5001/airport_employee/arrival_fights', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          flight_num: flight,
            baggage: baggage
        })
    })

  }
  return (


    <div>
       <div>      
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Flight </Form.Label>
                <Form.Control type="text" placeholder="Enter Flight Number" onChange={e => setFlight(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Baggage</Form.Label>
                <Form.Control type="text" placeholder="Enter Baggage Carousel Number" onChange={e => setBaggage(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form> 
            <BaggageTable/>
    </div>


      </div>  
    
  )
  
}

export default BaggageAssignment