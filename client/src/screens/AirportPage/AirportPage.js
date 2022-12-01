// create two react button page

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import StaticTable from '../../components/StaticTable/StaticTable';
import './airport.css';

export default function AirportPage() {
    const assignRandomGate = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_BASE_URL}/gates/random_assignment`, {
            method: 'POST'
        })
        .then(res => res.json())
        .catch(err => console.log(err));
    };

    const baggageUnassignment = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_BASE_URL}/airport_employee/unassign_baggage`, {
            method: 'POST'
        })
        .then(res => res.json())
        .catch(err => console.log(err));
    };

    const periodicUnassignment = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_BASE_URL}/gates/periodic_unassignment`, {
            method: 'POST'
        })
        .then(res => res.json())
        .catch(err => console.log(err));
    };

    return (

        <div className="main">
        <Container>
            <Row>
                <div className="intro-text">
                    <div className='px-2'>
                        <h3>WELCOME TO AIRPORT EMPLOYEE PAGE</h3>
                    </div>
                    <div className='buttonContainer'>
                    

                        <Link to="/airport/gate">
                            <Button size='lg' className=' btn btn-default btn-responsive' variant='outline-primary'>
                            Gate Maintenance
                            </Button>
                        </Link>
                        <Link to="/airport/baggage">
                            <Button size='lg' className='btn btn-default btn-responsive' variant='outline-primary'>
                            Baggage Carousel Assignment
                            </Button>
                        </Link>
                        <Link onClick={assignRandomGate}>
                            <Button size='lg' className='btn btn-default btn-responsive' variant='outline-primary'>
                            Random Gate Assignment
                            </Button>
                        </Link>
                        <Link onClick={periodicUnassignment}>
                            <Button size='lg' className='btn btn-default btn-responsive' variant='outline-primary'>
                            Gate Unassignment
                            </Button>
                        </Link>
                        <Link onClick={baggageUnassignment}>
                            <Button size='lg' className='btn btn-default btn-responsive' variant='outline-primary'>
                            Baggage Unassignment
                            </Button>
                        </Link>
                      </div>
                </div>


            </Row>
            <StaticTable  inventory_api_url={`${process.env.REACT_APP_BASE_URL}/flights/next4hr`} />
            <h2>All flights</h2>
            <StaticTable  inventory_api_url={`${process.env.REACT_APP_BASE_URL}/flights/`} />
        </Container>
        
    </div>

    );
    }