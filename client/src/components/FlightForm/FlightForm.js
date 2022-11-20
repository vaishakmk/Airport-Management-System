import React, { useState } from 'react';
import "./FlightForm.css";

function FlightForm({ inventory_api_url }) {
    const [inputs, setInputs] = useState({
        flight_num: "",
        airline_name: "",
        destination: "",
        start: "",
        arr_dep: "",
        timing: 0
});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
        fetch(`${inventory_api_url}`, {
            method: "POST",
            body: JSON.stringify({
                flight_num: inputs.flight_num,
                airline_name: inputs.airline_name,
                destination: inputs.destination,
                start: inputs.start,
                arr_dep: inputs.arr_dep,
                timing: inputs.timing
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
    }

    return (
        <form className="form-style-9" onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>
                    <input
                        type="text"
                        name="flight_num"
                        placeholder="Flight ID"
                        onChange={handleChange} 
                        className="field-style field-split align-left" 
                     />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="airline_name"
                            placeholder="Airline Name"
                            onChange={handleChange}
                            className="field-style field-split align-right"
                        />
                    </label>
                </li>



                <li>
                    <label>
                        <input
                            type="text"
                            name="start"
                            placeholder="Source Aiport Code"
                            onChange={handleChange}
                            className="field-style field-split align-left" 
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="destination"
                            placeholder="Destination Aiport Code"
                            onChange={handleChange}
                            className="field-style field-split align-right"
                        />
                    </label>
                </li>


                <li>
                    <label>
                        <input
                            type="text"
                            name="arr_dep"
                            placeholder="Arrival at or Departure from SJC?"
                            onChange={handleChange}
                            className="field-style field-split align-left" 
                        />
                    </label>
                    <label>
                        <input
                            type="number"
                            name="timing"
                            placeholder="Time of arrival at/departure from SJC"
                            onChange={handleChange}
                            className="field-style field-split align-right"
                        />
                    </label>
                </li>


                <li>
                    <input type="submit" value="Add Flight" />
                </li>
            </ul>
        </form>

        /*

        <form className='flight_form' onSubmit={handleSubmit}>
            <label>Enter Flight ID:
                <input
                    type="text"
                    name="flight_num"
                    defaultValue={""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Airline Name:
                <input
                    type="text"
                    name="airline_name"
                    defaultValue={""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Source Aiport Code:
                <input
                    type="text"
                    name="start"
                    defaultValue={""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Destination Aiport Code:
                <input
                    type="text"
                    name="destination"
                    defaultValue={""}
                    onChange={handleChange}
                />
            </label>
            <label>Arrival at or Departure from SJC?
                <input
                    type="text"
                    name="arr_dep"
                    defaultValue={""}
                    onChange={handleChange}
                />
            </label>
            <label>Time of arrival at/departure from SJC:
                <input
                    type="number"
                    name="timing"
                    defaultValue={0}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
       */
    )
}

export default FlightForm;