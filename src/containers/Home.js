import React, {useState}from 'react';
import { Link, Navigate } from "react-router-dom";


const Home = () => {
  
    const [formData, setFormData] = useState({
   msg: "",
 });

 const { msg } = formData;
 const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


  return (
    <div className='container mt-5'>
        <h1>Control Panel</h1>
        <div class="box" style={{display:"flex"}} >
          <p>AUTO MODE</p>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          </div>
        </div>
        <p>LED LIGHT</p>
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  
</div>
        <p>WATER PUMP</p>
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  
</div>
        <p>WATER SPRAY</p><div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  
</div>
        <div className='form-group'>
                <p>DISPLAY BOX</p>
                <input
                    className='form-control'
                    type='msg'
                    placeholder='Type Here!'
                    name='msg'
                    value={msg}
                    onChange={e => onChange(e)}

                    // onChange={e => onChange(e)}
                    // required
                />
                <button className='btn btn-primary' >update</button>
        </div>
    </div>
  );
};



export default Home;
