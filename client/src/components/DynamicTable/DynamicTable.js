import React, { useEffect, useState } from 'react';
import "./DynamicTable.css";

function DynamicTable({ inventory_api_url, airline_id }) {
    const [data, setData] = useState([]);

    // GET request function to Flights table API
    const fetchInventory = () => {
        // should also filter based on airline_id
        fetch(`${inventory_api_url}`)
            .then(res => res.json())
            .then(json => setData(json));
        /*
         * This should return the set of flights departing or arriving at SJC
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

    const [flightNum, setFlightNum] = useState(null);
    const [source, setSource] = useState(null);
    const [destination, setDestination] = useState(null);
    const [flightTime, setFlightTime] = useState(null);
    const [arr_dep, setArrOrDep] = useState(null);
    


    /**
     *
     * @param id - The id of the flight being edited
     * @param currentTime - The current arrival/departure time for the flight
     */
    const onEdit = ({ id, currFNum, currSource, currDestination, currentTime, currArrDep }) => {
        setInEditMode({
            status: true,
            rowKey: id
        });
        setFlightNum(currFNum);
        setSource(currSource);
        setDestination(currDestination);
        setArrOrDep(currArrDep);
        setFlightTime(currentTime);
    }

    /**
     *
     * @param id
     * @param newTime
     */
    const updateInventory = ({ id, newFNum, newSource, newDestination, newTime, newArrDep }) => {
        fetch(`${inventory_api_url}/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                "id": id,
                "flight_num": newFNum,
                "start": newSource,
                "destination": newDestination,
                "arr_dep": newArrDep,
                "timing": newTime

                // id: parseInt(id),
                // flight_num: parseInt(newFNum),
                // start: String(newSource),
                // destination: String(newDestination),
                // arr_dep: String(newArrDep),
                // timing: parseInt(newTime)
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                // reset inEditMode and time state values
                onCancel();

                // fetch the updated data
                fetchInventory();
            })
    }

    /**
     *
     * @param id -The id of the product
     * @param newTime - The new unit price of the product
     */
    const onSave = ({ id, newFNum, newSource, newDestination, newTime, newArrDep }) => {
        updateInventory({ id, newFNum, newSource, newDestination, newTime, newArrDep });
    }

    const onCancel = () => {
        // reset the inEditMode state value
        setInEditMode({
            status: false,
            rowKey: null
        })
        // reset state variables for each field to null
        setFlightNum(null);
        setSource(null);
        setDestination(null);
        setArrOrDep(null);
        setFlightTime(null);
    }

    return (
        <div className="table-wrapper">
            <h1>Flights Table</h1>
            <table className="fl-table">
                <thead>
                    <tr>
                        <th>Flight ID</th>
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
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <input value={flightNum}
                                                onChange={(event) => setFlightNum(event.target.value)}
                                            />
                                        ) : (
                                                item.flight_num
                                        )
                                    }
                                </td>
                                <td>{item.airline_name}</td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <input value={source}
                                                onChange={(event) => setSource(event.target.value)}
                                            />
                                        ) : (
                                                item.start
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <input value={destination}
                                                onChange={(event) => setDestination(event.target.value)}
                                            />
                                        ) : (
                                                item.destination
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <input value={arr_dep}
                                                onChange={(event) => setArrOrDep(event.target.value)}
                                            />
                                        ) : (
                                                item.arr_dep
                                        )
                                    }
                                </td>
                                <td>{item.gate}</td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <input value={flightTime}
                                                onChange={(event) => setFlightTime(event.target.value)}
                                            />
                                        ) : (
                                            item.timing
                                        )
                                    }
                                </td>
                                <td>{item.baggage}</td>
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <React.Fragment>
                                                <button
                                                    className={"btn-success"}
                                                    onClick={() => onSave({
                                                        id: item.id,
                                                        currFNum: item.flight_num,
                                                        currSource: item.source,
                                                        currDestination: item.destination,
                                                        currentTime: item.timing,
                                                        currArrDep: item.arr_dep
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
                                                        id: item.id,
                                                        currFNum: item.flight_num,
                                                        currSource: item.source,
                                                        currDestination: item.destination,
                                                        currentTime: item.timing,
                                                        currArrDep: item.arr_dep
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