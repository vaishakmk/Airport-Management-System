import React from 'react';
import { useEffect, useState } from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GateStatusTable from '../../components/GateStatusTable/GateStatusTable';



function GateMaintenance() {
  const [terminal, setTerminal] = React.useState('')
  const[gate, setGate] = React.useState('')
  const[status, setStatus] = React.useState('')
  const [data, setData] = useState([]);
  
  const fetchInventory = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/airport_employee/gates`)
        .then(res => res.json())
        .then(json => setData(json));

}
useEffect(() => {
  fetchInventory();
}, []);
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/airport_employee/gates`, {
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
    // .then(res => fetchInventory())
    .then(res => {
            
      if(res.status === 409){
          
          alert("This gate is currently occupied");
      }

       else if(res.status === 404){
            
            alert("Please provide correct terminal and gate info");

      }
  return res.json();
  } )

//     .then(res => {
//       console.log(res.sta); 
//       if(res.status === 409){


//           console.log("This gate is currently occupied");
//           alert("This gate is currently occupied");

//       }
//   return res.json();
//   }   

// )

  }
  return (


    <div>
      <h2>Gate Maintenance Page</h2>
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
            <GateStatusTable data={data}/>
    </div>


      </div>  
    
  )
}

export default GateMaintenance