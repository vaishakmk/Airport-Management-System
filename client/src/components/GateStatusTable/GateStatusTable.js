import React, { useEffect, useState } from 'react';
import "./GateStatusTable.css";

function BaggageTable({ inventory_api_url }) {
    const [data, setData] = useState([]);

    const fetchInventory = () => {
        fetch("http://localhost:5001/airport_employee/gates")
            .then(res => res.json())
            .then(json => setData(json));

    }

    useEffect(() => {
        fetchInventory();
    }, []);

    return (
        <div className="table-wrapper">
            <h2>Terminal-Gate Status Details</h2>
            <table className="fl-table">
                <thead>
                    <tr>
                        
                        <th>Terminal</th>
                        <th>Gate</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                
                                <td>{item.terminal}</td>
                                <td>{item.gate_num}</td>
                                <td>{item.gate_status}</td>


                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BaggageTable;