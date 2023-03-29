import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ControlPanel from "./containers/ControlPanel";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import SignUpSuccess from "./containers/SignUpSuccess";
import Information from "./containers/Information";
import Tutorial1 from "./containers/Tutorial1";
import Tutorial2 from "./containers/Tutorial2";
import Tutorial3 from "./containers/Tutorial3";
import Layout from "./hocs/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/controlPanel" element={<ControlPanel />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signupsuccess" element={<SignUpSuccess />} />
          <Route exact path="/information" element={<Information />} />
          <Route exact path="/tutorial1" element={<Tutorial1 />} />
          <Route exact path="/tutorial2" element={<Tutorial2 />} />
          <Route exact path="/tutorial3" element={<Tutorial3 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
