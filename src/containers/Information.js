import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
// import getTemperature from '../action/update/InformationUpdate';

const Information = () => {
  const [temperature, setTemperature] = useState();
  const [soid_humidity, setsoid_humidity] = useState();
  const [air_humidity, setair_humidity] = useState();
  const [light, setlight] = useState();

  async function getTemperature() {
    const response = await fetch(
      `https://api.thingspeak.com/channels/2041520/fields/1.json?results=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let actualData = await response.json();
    setTemperature(actualData.feeds[0].field1);
    console.log("actualData: ");
    console.log(actualData.feeds[0].field1);
  }

  async function getair_humidity() {
    const response = await fetch(
      `https://api.thingspeak.com/channels/2041520/fields/2.json?results=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let actualData = await response.json();
    setsoid_humidity(actualData.feeds[0].field2);
  }
  async function getlight() {
    const response = await fetch(
      `https://api.thingspeak.com/channels/2041520/fields/3.json?results=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let actualData = await response.json();
    setair_humidity(actualData.feeds[0].field3);
  }
  async function getsoid_humidity() {
    const response = await fetch(
      `https://api.thingspeak.com/channels/2041520/fields/4.json?results=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let actualData = await response.json();
    setlight(actualData.feeds[0].field4);
  }

  useEffect(() => {
    getTemperature();
    getair_humidity();
    getlight();
    getsoid_humidity();
  }, []);

  function update() {
    getTemperature();
    getair_humidity();
    getlight();
    console.log("testing updated");
    // getsoid_humidity();
  }

  return (
    <div className="container " style={{ color: "white" }}>
      <h1 style={{ paddingTop: "50px" }}>Live Data!</h1>

      <div className="form-group">
        <p>Temperature:</p>
        <input
          className="form-control"
          type="temperature"
          name="temperature"
          value={temperature + " °C"}
          disabled
        />
      </div>
      {/* <br /> */}
      {/* <div className="form-group">
        <p>Soid Humidity:</p>
        <input
          className="form-control"
          type="soid_humidity"
          name="soid_humidity"
          value={soid_humidity + " %"}
          disabled
        />
      </div> */}
      <br />
      <div className="form-group">
        <p>Air Humidity:</p>
        <input
          className="form-control"
          type="air_humidity"
          name="air_humidity"
          value={air_humidity + " %"}
          disabled
        />
      </div>
      <br />
      <div className="form-group">
        <p>Light</p>
        <input
          className="form-control"
          type="light"
          name="light"
          value={light + " LUX"}
          disabled
        />
      </div>
      <br />
      <button
        onClick={update()}
        className="btn btn-primary"
        style={{ backgroundColor: "#5b3e31" }}
      >
        update
      </button>

      <Link
        className="nav-link active"
        aria-current="page"
        to="/controlPanel"
        style={{
          color: "white",
          fontFamily: "Shantell Sans",
          paddingTop: "20px",
        }}
      >
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "green" }}
        >
          Control Panel
        </button>
      </Link>
    </div>
  );
};

export default Information;
