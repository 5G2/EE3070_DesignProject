import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const ControlPanel = () => {
  const [message, setMessage] = useState("Type Here!");
  const [autoState, setAutoState] = useState(true);
  const [LEDState, setLEDState] = useState(true);
  const [pumpState, setpumpState] = useState(true);
  const [sprayState, setsprayState] = useState(true);
  const [fanState, setfanState] = useState(true);

  async function updateAutoState() {
    let temp = autoState ? 1 : 0;
    setAutoState(!autoState);
    // console.log("autosate =" + autoState);
    // console.log("temp=" + temp);
    const respond = await fetch(
      `https://api.thingspeak.com/update.json?api_key=TKBQBY0AWUGBI6WP&field1=${temp}`,
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
  async function updateLED() {
    let temp = LEDState ? 1 : 0;
    setLEDState(!LEDState);
    // console.log("autosate =" + autoState);
    // console.log("temp=" + temp);
    const respond = await fetch(
      `https://api.thingspeak.com/update.json?api_key=TKBQBY0AWUGBI6WP&field2=${temp}`,
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
  async function updatePump() {
    let temp = pumpState ? 1 : 0;
    setpumpState(!pumpState);
    // console.log("autosate =" + autoState);
    // console.log("temp=" + temp);
    const respond = await fetch(
      `https://api.thingspeak.com/update.json?api_key=TKBQBY0AWUGBI6WP&field3=${temp}`,
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
  async function updateSpray() {
    let temp = sprayState ? 1 : 0;
    setsprayState(!sprayState);
    // console.log("autosate =" + autoState);
    // console.log("temp=" + temp);
    const respond = await fetch(
      `https://api.thingspeak.com/update.json?api_key=TKBQBY0AWUGBI6WP&field4=${temp}`,
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
  async function updateFan() {
    let temp = fanState ? 1 : 0;
    setfanState(!fanState);
    // console.log("autosate =" + autoState);
    // console.log("temp=" + temp);
    const respond = await fetch(
      `https://api.thingspeak.com/update.json?api_key=TKBQBY0AWUGBI6WP&field5=${temp}`,
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
    <div className="container " style={{ color: "white" }}>
      <h1 style={{ paddingTop: "50px" }}>Control Panel</h1>
      <div className="box" style={{ display: "flex" }}>
        <p>AUTO MODE</p>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => {
              updateAutoState();
            }}
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
          onClick={() => {
            updateLED();
          }}
        />
      </div>
      <p>WATER PUMP</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => {
            updatePump();
          }}
        />
      </div>
      <p>WATER SPRAY</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => {
            updateSpray();
          }}
        />
      </div>
      <p>Fan</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => {
            updateFan();
          }}
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
          onChange={(e) => setMessage(e.target.value)}

          // onChange={e => onChange(e)}
          // required
        />
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "#5b3e31" }}
        >
          update
        </button>
        <Link
          className="nav-link active"
          aria-current="page"
          to="/information"
          style={{
            paddingTop: "20px",
            color: "white",
            fontFamily: "Shantell Sans",
          }}
        >
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "green" }}
          >
            Information Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ControlPanel;
