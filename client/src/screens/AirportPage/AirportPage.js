// create two react button page

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StaticTable from '../../components/StaticTable/StaticTable';

export default function AirportPage() {
    return (
        <div>
        <Button variant="primary">
            <Link to="/airport/gate">Gate MAintenance</Link>
        </Button>
        <Button variant="primary">
            <Link to="/airport/baggage">Baggage Carousel Assignment</Link>
        </Button>
        <StaticTable/>
        </div>
    );
    }