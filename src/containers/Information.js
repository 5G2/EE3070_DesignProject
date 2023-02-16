import React, {useState,useEffect}from 'react';
import { Link, Navigate } from "react-router-dom";


function Information (props) {

    const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    light: "",
    co2: "",
    });

    const [temp,setTemp]= useState()

    useEffect(() => {
        getTemperature()
      }, [])
  //fetch(`https://api.thingspeak.com/channels/2034242/fields/1.json`)

   async function getTemperature() {
    const response = await fetch(
        `https://api.thingspeak.com/channels/2034242/fields/1.json?results=1`,{
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },})
    let actualData = await response.json();
    let temperatureData = actualData.feeds[0].field1
    // console.log("temperature= "+temperatureData);
    // console.log(actualData) 
    setTemp(temperatureData)
  }


    const { temperature,humidity, light,co2 } = formData;
  
    return (

        <div className='container mt-5'>
        <h1>Live Data!</h1>
        
            <div className='form-group'>
                <p>Temperature:</p>
                <input
                    className='form-control'
                    type='temperature'
                    name='temperature'
                    value={temp+ " °C"}
                    disabled
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Humidity:</p>
                <input
                    className='form-control'
                    type='humidity'
                    placeholder='95%'
                    name='humidity'
                    value={humidity}
                    disabled
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Light Intensity:</p>
                <input
                    className='form-control'
                    type='light'
                    placeholder='2000 LUX'
                    name='light'
                    value={light}
                    disabled
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Co2</p>
                <input
                    className='form-control'
                    type='co2'
                    placeholder='600 PPM'
                    name='co2'
                    value={co2}
                    disabled
                />
            </div>
            <br/>
            {/* <button onClick={getData()}> update</button> */}
    </div>
    )
};

export default Information;