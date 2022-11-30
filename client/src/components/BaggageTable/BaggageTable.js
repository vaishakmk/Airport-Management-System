import React, { useEffect, useState } from 'react';
import "./BaggageTable.css";

function BaggageTable({ inventory_api_url }) {
    const [data, setData] = useState([]);

    const fetchInventory = () => {
        fetch("http://localhost:5001/airport_employee/arrival_fights")
            .then(res => res.json())
            .then(json => setData(json));

    }

    useEffect(() => {
        fetchInventory();
    }, []);

    return (
        <div className="table-wrapper">
            <h2>Arrival Flights Details</h2>
            <table className="fl-table">
                <thead>
                    <tr>
                        
                        <th>Flight Number</th>
                        <th>Airline</th>
                        <th>Source</th>
                        <th>Destination</th>
                        
                        <th>Gate</th>
                        <th>Flight Time</th>
                        <th>Baggage Claim</th>
                        <th>Terminal</th>
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
                                
                                <td>{item.gate}</td>
                                <td>{item.flighttime}</td>
                                <td>{item.baggage}</td>
                                <td>{item.terminal}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BaggageTable;