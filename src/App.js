import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import SignUpSuccess from "./containers/SignUpSuccess";
import Information from "./containers/Information";
import Layout from "./hocs/Layout";


function App() {
  return (

    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/signupsuccess" element={<SignUpSuccess/>} />
          <Route exact path="/information" element={<Information/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
