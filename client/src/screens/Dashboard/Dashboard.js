import React from 'react';
import StaticTable from '../../components/StaticTable/StaticTable';

const Dashboard = () => {
  return (
      <StaticTable inventory_api_url="http://localhost:5001/flights" />
  )
}

export default Dashboard