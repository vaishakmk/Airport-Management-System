import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BaggageTable from '../../components/BaggageTable/BaggageTable';


function BaggageAssignment() {
  const [baggage, setBaggage] = React.useState('')
  const[flight, setFlight] = React.useState('')
  

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/airport_employee/arrival_fights`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          flight_num: flight,
            baggage: baggage
        })
    })
    .then(res =>{
      if(res.status == 404){
        alert("Please re-enter the correct flight information");
        // setShowAlert(true);
      }
      else if (res.status === 400){
        alert("This Flight has already been assigned a baggage counter");
      }
      else if (res.status === 500){
        alert("Server Error");
      }
      else if (res.status === 409){
        alert("This baggage counter has already been assigned to 4 flights. Please assign another counter");
      }

      return res.json();
  })
}
  return (


    <div>
      <h2>Baggage Carousel Assignment Page</h2>
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
            <Button variant="primary">
            <Link to="/airport">Back</Link>
        </Button>
            </Form> 
            <BaggageTable inventory_api_url = {`${process.env.REACT_APP_BASE_URL}/airport_employee/arrival_fights`}/>
    </div>


      </div>  
    
  )
  
}

export default BaggageAssignment