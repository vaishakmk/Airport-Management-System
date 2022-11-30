// create two react button page

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StaticTable from '../../components/StaticTable/StaticTable';

export default function AirportPage() {
    const assignRandomGate = (e) => {
        e.preventDefault();
        fetch('http://localhost:5001/gates/random_assignment', {
            method: 'POST'
        })
        .then(res => res.json())
        .catch(err => console.log(err));
    };

    return (
        <div>
        <Button variant="primary">
            <Link to="/airport/gate">Gate MAintenance</Link>
        </Button>
        <Button variant="primary">
            <Link to="/airport/baggage">Baggage Carousel Assignment</Link>
        </Button>
        <Button variant="primary">
            <Link onClick={assignRandomGate}>Random Gate Assign Gate</Link>
        </Button>
        <StaticTable/>
        </div>
    );
    }