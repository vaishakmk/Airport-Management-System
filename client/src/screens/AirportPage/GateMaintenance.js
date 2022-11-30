import React from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GateStatusTable from '../../components/GateStatusTable/GateStatusTable';



function GateMaintenance() {
  const [terminal, setTerminal] = React.useState('')
  const[gate, setGate] = React.useState('')
  const[status, setStatus] = React.useState('')
  

  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5001/airport_employee/gates', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          terminal: terminal,
          gate_num: gate,
          gate_status: status
        })
    })

  }
  return (


    <div>
      <h1>Gate Maintenance Page</h1>
       <div>      
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Terminal </Form.Label>
                <Form.Control type="text" placeholder="Enter Terminal" onChange={e => setTerminal(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Gate</Form.Label>
                <Form.Control type="text" placeholder="Enter Gate" onChange={e => setGate(e.target.value)}/>
            </Form.Group>
            <Form.Label>Gate Status</Form.Label>
            <div>
              <select status={status} onChange={e => setStatus(e.target.value)}>
                <option status="Occupied">Occupied</option>
                <option status="UnOccupied">UnOccupied</option>
                <option status="ClosedForMaintenance">ClosedForMaintenance</option>
              </select>
              
            </div>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="primary">
            <Link to="/airport">Back</Link>
        </Button>
            </Form> 
            <GateStatusTable/>
    </div>


      </div>  
    
  )
}

export default GateMaintenance