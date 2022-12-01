import React from 'react';
import StaticTable from '../../components/StaticTable/StaticTable';

const Dashboard = () => {
  return (
    <div>
      <h2>Flights scheduled for next 1 hour</h2>
<StaticTable inventory_api_url= {`${process.env.REACT_APP_BASE_URL}/flights/next1hr`} />
<h2>Flights scheduled for next 2 hours</h2>
    <StaticTable inventory_api_url= {`${process.env.REACT_APP_BASE_URL}/flights/next2hr`} />
    <h2>Flights scheduled for next 4 hours</h2>
    <StaticTable inventory_api_url= {`${process.env.REACT_APP_BASE_URL}/flights/next4hr`} />
    </div>
  )
}

export default Dashboard