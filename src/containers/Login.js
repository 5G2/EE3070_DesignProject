import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="container mt-5">
      <h1>Sign In</h1>
      <p>Sign into your Account</p>

      <div className="form-group">
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}

          // onChange={e => onChange(e)}
          // required
        />
      </div>
      <br />
      <div className="form-group">
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          // onChange={e => onChange(e)}
          // minLength='6'
          // required
        />
      </div>
      <br />
      <Link to="/controlPanel">
        <button className="btn btn-primary">Login</button>
      </Link>
      <p className="mt-3">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
