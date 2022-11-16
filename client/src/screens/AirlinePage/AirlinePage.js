import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import "./AirlinePage.css";
import LandingPage from '../LandingPage/LandingPage';
import { useParams } from 'react-router-dom';
import DynamicTable from '../../components/DynamicTable/DynamicTable';
import FlightForm from '../../components/FlightForm/FlightForm';

const AirlinePage = () => {
  const { username } = useParams();

  /*
   * Need to add authentication check and re-direct to the Login page
   * if the check fails
  */


  /*
   Page contents:

    Editable table containing flight details of all known flights at SJC (another component)
    Form to create a new flight entry


  */
  return (
    <div className="airline-employee">
        <Container>
            <Row>
                <div className="intro-text">
                    <div className='px-2'>
                          <h1 >Welcome to San Jose Airport's Airport Employee Page { username }</h1>
                      </div>

                </div>
              </Row>
              <FlightForm inventory_api_url="http://localhost:4000/flights" />
              <DynamicTable inventory_api_url="http://localhost:4000/flights"/>
        </Container>
    </div>
  );
};

export default AirlinePage;