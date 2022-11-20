import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./AirlinePage.css";
import { useParams } from 'react-router-dom';
import DynamicTable from '../../components/DynamicTable/DynamicTable';
import FlightForm from '../../components/FlightForm/FlightForm';

const AirlinePage = () => {

  /*
   * Need to add authentication check and re-direct to the Login page
   * if the check fails
  */


  /*
   Page contents:

    Editable table containing flight details of all known flights at SJC (another component)
    Form to create a new flight entry
  */

    const { airline_id } = useParams();

    // Calling the function on component mount
    useEffect(() => {
        console.log("Initializing Airline page");
        console.log(airline_id );
    }, []);

  return (
    <div className="airline-employee">
        <Container>
            <Row>
                <div className="intro-text">
                    <div className='px-2'>
                          <h1 >Welcome to San Jose Airport's { airline_id } Employee Page</h1>
                      </div>

                </div>
              </Row>
              <FlightForm inventory_api_url="http://localhost:5001/airline_employee/add_flights" />
              <DynamicTable
                  inventory_api_url={"http://localhost:5001/flights"}
                  update_inventory_url={"http://localhost:5001/airline_employee/update_flights"}
                  airline_id={airline_id}
              />
        </Container>
    </div>
  );
};

export default AirlinePage;