import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./LandingPage.css";

const LandingPage = () => {
    React.useEffect(() => localStorage.clear());
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
                </div>


            </Row>
        </Container>
    </div>
  );
};

export default LandingPage;