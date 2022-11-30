import React from 'react';
import StaticTable from '../../components/StaticTable/StaticTable';

const Dashboard = () => {
  return (
    <div>
      <h2>Flights scheduled within 1 hour</h2>
<StaticTable inventory_api_url="http://localhost:5001/flights/next1hr" />
<h2>Flights scheduled within 2 hours</h2>
    <StaticTable inventory_api_url="http://localhost:5001/flights/next2hr" />
    <h2>Flights scheduled within 4 hours</h2>
    <StaticTable inventory_api_url="http://localhost:5001/flights/next4hr" />
    </div>
    
  )
}

export default Dashboard