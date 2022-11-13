import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
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
                        <a href='/login'>
                            <Button size='lg' className='landingbutton'>
                                Login
                            </Button>
                        </a>
                        <a href='/register'>
                            <Button size='lg' className='landingbutton' variant='outline-primary'>
                                Register
                            </Button>
                        </a>

                    </div>

                </div>


            </Row>
        </Container>
    </div>
  );
};

export default LandingPage;