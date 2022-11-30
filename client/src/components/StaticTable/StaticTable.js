import React, { useEffect, useState } from 'react';
import "./StaticTable.css";

function StaticTable({ inventory_api_url }) {
    const [data, setData] = useState([]);

    // GET request function to your Mock API
    const fetchInventory = () => {
        fetch(`${inventory_api_url}`)
            .then(json => setData(json));
        /*
         * This should return the set of flights departing or arriving at SJC
        */
    }

    // Calling the function on component mount
    useEffect(() => {
        fetchInventory();
    }, []);

    return (
        <div className="table-wrapper">
            <h1>Flights Schedule</h1>
            <table className="fl-table">
                <thead>
                    <tr>
                        
                        <th>Flight Number</th>
                        <th>Airline</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Arrival/Departure</th>
                        <th>Gate</th>
                        <th>Flight Time</th>
                        <th>Baggage Claim</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                
                                <td>{item.flight_num}</td>
                                <td>{item.airline}</td>
                                <td>{item.start}</td>
                                <td>{item.destination}</td>
                                <td>{item.arr_dep}</td>
                                <td>{item.gate}</td>
                                <td>{item.flighttime}</td>
                                <td>{item.baggage}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default StaticTable;