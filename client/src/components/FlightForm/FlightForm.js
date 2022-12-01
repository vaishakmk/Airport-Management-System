import React, { useState } from 'react';
import "./FlightForm.css";

function FlightForm({ inventory_api_url, airline_name }) {
    const [inputs, setInputs] = useState({
        flight_num: "",
        destination: "",
        start: "",
        timing: 0
});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${inventory_api_url}`
            // + "/" + `${inputs.flight_num}`
            , {
            method: "POST",
            body: JSON.stringify({
                flight_num: inputs.flight_num,
                airline: airline_name,
                destination: inputs.destination,
                start: inputs.start,
                flighttime: inputs.timing
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(rand => window.location.reload(false))
        // Ensures that any other components on the page refresh to pick up the change induced
        // by this form submission. This is not the best way to do it, but its quick and dirty.
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
                            name="timing"
                            placeholder="Time of arrival at/departure from SJC"
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
                            placeholder="Source Aiport"
                            onChange={handleChange}
                            className="field-style field-split align-left" 
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="destination"
                            placeholder="Destination Aiport"
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
    )
}

export default FlightForm;