import React, {useState}from 'react';
import { Link, Navigate } from "react-router-dom";


function Signup (props) {
     const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { username,email, password,confirmpassword,code } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (

        <div className='container mt-5'>
        <h1>Sign up your account for smart vertical farm!</h1>
        
            <div className='form-group'>
                <p>Username:</p>
                <input
                    className='form-control'
                    type='username'
                    placeholder='Username'
                    name='username'
                    value={username}
                    onChange={e => onChange(e)}

                    // onChange={e => onChange(e)}
                    // required
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Email:</p>
                <input
                    className='form-control'
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    // onChange={e => onChange(e)}
                    // minLength='6'
                    // required
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Password:</p>
                <input
                    className='form-control'
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    // onChange={e => onChange(e)}
                    // minLength='6'
                    // required
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Confirm password:</p>
                <input
                    className='form-control'
                    type='password'
                    placeholder='Confirm Password'
                    name='confirmpassword'
                    value={confirmpassword}
                    onChange={e => onChange(e)}
                    // onChange={e => onChange(e)}
                    // minLength='6'
                    // required
                />
            </div>
            <br/>
            <div className='form-group'>
                <p>Invitation code:</p>
                <input
                    className='form-control'
                    type='code'
                    placeholder='Code'
                    name='code'
                    value={code}
                    onChange={e => onChange(e)}
                    // onChange={e => onChange(e)}
                    // minLength='6'
                    // required
                />
            </div>
            <br/>
            <button className='btn btn-primary' ><Link to='/signupsuccess'>Sign Up</Link></button>
    </div>
    )
};

export default Signup;