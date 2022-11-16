import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import StaticTable from '../../components/StaticTable/StaticTable';
import { Link } from 'react-router-dom';

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
        <Container>
            <Row>
                <div className="intro-text">
                    <div className='px-2'>
                        <h1 >Welcome to San Jose Airport</h1>
                    </div>
                    <div className='buttonContainer'>
                    

                        <Link to="/login">
                            <Button size='lg' className='landingbutton'>
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button size='lg' className='landingbutton' variant='outline-primary'>
                                Register
                            </Button>
                        </Link>



                      </div>

                      <StaticTable inventory_api_url="http://localhost:4000/flights" />

                      

                </div>


            </Row>
        </Container>
    </div>
  );
};

export default LandingPage;