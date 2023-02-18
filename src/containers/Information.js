import React, {useState,useEffect}from 'react';
import { Link, Navigate } from "react-router-dom";
// import getTemperature from '../action/update/InformationUpdate';



const Information =() =>{

    const [temperature, setTemperature] = useState();
    const [humidity, setHumidity] = useState();
    const [light, setLight] = useState();
    const [co2, setCo2] = useState();


    async function getTemperature() {
        const response = await fetch(
            `https://api.thingspeak.com/channels/2034242/fields/1.json?results=1`,{
                method:'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },})
        let actualData = await response.json();
        setTemperature(actualData.feeds[0].field1) 
      }
    
      async function getLight() {
        const response = await fetch(
            `https://api.thingspeak.com/channels/2034242/fields/1.json?results=1`,{
                method:'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },})
        let actualData = await response.json();
        setHumidity(actualData.feeds[0].field1) 
      }
      async function getCo2() {
        const response = await fetch(
            `https://api.thingspeak.com/channels/2034242/fields/1.json?results=1`,{
                method:'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },})
        let actualData = await response.json();
        setLight(actualData.feeds[0].field1) 
      }
      async function getHumidity() {
        const response = await fetch(
            `https://api.thingspeak.com/channels/2034242/fields/1.json?results=1`,{
                method:'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },})
        let actualData = await response.json();
        setCo2(actualData.feeds[0].field1) 
      }
      
    useEffect(() => {
        getTemperature();
        getLight();
        getCo2();
        getHumidity();
      }, [])

      
      function update(){
        // setTemperature(getTemperature());
        // console.log(getTemperature())
      }

  
    return (

        <div className='container mt-5'>
        <h1>Live Data!</h1>
        
            <div className='form-group'>
                <p>Temperature:</p>
                <input
                    className='form-control'
                    type='temperature'
                    name='temperature'
                    value={temperature+ " °C"}
                    disabled
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Humidity:</p>
                <input
                    className='form-control'
                    type='humidity'
                    name='humidity'
                    value={humidity +" %"}
                    disabled
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Light Intensity:</p>
                <input
                    className='form-control'
                    type='light'
                    name='light'
                    value={light +" LUX"}
                    disabled
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Co2</p>
                <input
                    className='form-control'
                    type='co2'
                    name='co2'
                    value={co2 +" PPM"}
                    disabled
                />
            </div>
            <br/>
            <button onClick={update()}> update</button>
    </div>
    )
};

export default Information;