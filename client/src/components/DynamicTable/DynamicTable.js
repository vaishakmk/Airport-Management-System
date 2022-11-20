import React, { useEffect, useState } from 'react';
import "./DynamicTable.css";

function DynamicTable({ inventory_api_url, update_inventory_url, airline_id }) {
    const [data, setData] = useState([]);

    // GET request function to Flights table API
    const fetchInventory = () => {
        fetch(`${inventory_api_url}`)
            .then(res => res.json())
            .then(res => setData(res.filter(function (item) {
                if (item.airline === airline_id) {
                    return true; // selecting only those records that belong to this airline
                }
                return false;
            })));
        /*
         * Returns the set of flights departing or arriving at SJC, and filters to retain
         * only those operated by the airline that the current employee belongs to
        */
    }

    // Calling the function on component mount
    useEffect(() => {
        fetchInventory();
    }, []);


    /*
     * Logic to edit the arrival time of the flight
    */ 
    const [inEditMode, setInEditMode] = useState({
        status: false,
        rowKey: null
    });

    const [flightTime, setFlightTime] = useState(null);    

    /**
     *
     * @param id - The id of the flight being edited
     * @param currentTime - The current arrival/departure time for the flight
     */
    const onEdit = ({ id, currentTime }) => {
        setInEditMode({
            status: true,
            rowKey: id
        });
        setFlightTime(currentTime);
    }

    /**
     *
     * @param id
     * @param newTime
     */
    const updateInventory = ({ id, newTime }) => {
        fetch(`${update_inventory_url}/${id}`, {
            method: "POST",
            body: JSON.stringify({
                "flighttime": newTime
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                // reset inEditMode and time state values
                onCancel();

                // Note that we don't specially handle failure of the PUT request
                // This will simply manifest as the inventory not changing.

                // fetch the updated data
                fetchInventory();
            })
    }

    /**
     *
     * @param id -The id of the product
     * @param newTime - The new unit price of the product
     */
    const onSave = ({ id, newTime }) => {
        updateInventory({ id, newTime });
    }

    const onCancel = () => {
        // reset the inEditMode state value
        setInEditMode({
            status: false,
            rowKey: null
        })
        setFlightTime(null);
    }

    return (
        <div className="table-wrapper">
            <h1>Flights Table</h1>
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    {item.flight_num}
                                </td>
                                <td>{item.airline}</td>
                                <td>
                                    {item.start}
                                </td>
                                <td>
                                    {item.destination}
                                </td>
                                <td>
                                    {item.arr_dep}
                                </td>
                                <td>{item.gate}</td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item._id ? (
                                            <input value={flightTime}
                                                onChange={(event) => setFlightTime(event.target.value)}
                                            />
                                        ) : (
                                                item.flighttime
                                        )
                                    }
                                </td>
                                <td>{item.baggage}</td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item._id ? (
                                            <React.Fragment>
                                                <button
                                                    className={"btn-success"}
                                                    onClick={() => onSave({
                                                        id: item._id,
                                                        newTime: flightTime
                                                    })}
                                                >
                                                    Save
                                                </button>

                                                <button
                                                    className={"btn-secondary"}
                                                    style={{ marginLeft: 8 }}
                                                    onClick={() => onCancel()}
                                                >
                                                    Cancel
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            <button
                                                className={"btn-primary"}
                                                    onClick={() => onEdit({
                                                        id: item._id,
                                                        currentTime: item.flighttime
                                                    })}
                                            >
                                                Edit
                                            </button>
                                        )
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DynamicTable;