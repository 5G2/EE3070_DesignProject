import userEvent from "@testing-library/user-event";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/information");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container " style={{ color: "white" }}>
      <h1 style={{ paddingTop: "50px" }}>Sign In</h1>
      <p>Sign into your Account</p>
      <form onSubmit={login}>
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
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "green" }}
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
