import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Home = () => {
  const [message, setMessage] = useState("Type Here!");
  const [autoState, setAutoState] = useState(true);

  async function updateAutoState() {
    setAutoState(!autoState);
    let temp = autoState ? 1 : 0;
    console.log("autosate =" + autoState);
    console.log("temp=" + temp);
    const respond = await fetch(
      `https://api.thingspeak.com/update.json?api_key=EWTC8A98FFLDQGX4&field2=${temp}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(respond.body);
  }

  console.log(autoState);
  return (
    <div className="container mt-5">
      <h1>Control Panel</h1>
      <div className="box" style={{ display: "flex" }}>
        <p>AUTO MODE</p>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => updateAutoState()}
          />
        </div>
      </div>
      <p>LED LIGHT</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
      <p>WATER PUMP</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
      <p>WATER SPRAY</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
      <div className="form-group">
        <p>DISPLAY BOX</p>
        <input
          className="form-control"
          type="message"
          placeholder="Type Here!"
          name="message"
          value={message}
          // onChange={(e) => onChange(e)}

          // onChange={e => onChange(e)}
          // required
        />
        <button className="btn btn-primary">update</button>
      </div>
    </div>
  );
};

export default Home;
