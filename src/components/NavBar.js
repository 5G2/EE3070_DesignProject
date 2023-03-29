import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
const mystyle = {
  color: "white",
  backgroundColor: "green",
  padding: "10px",
  fontFamily: "Arial",
};
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ padding: "0px" }}
    >
      <div className="container-fluid" style={mystyle}>
        <Link
          className="navbar-brand "
          to="/"
          style={{
            color: "white",
            fontFamily: "Shantell Sans",
            fontSize: "25px",
          }}
        >
          Agriculture simulator
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: "white", fontFamily: "Shantell Sans" }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    color: "white",
                    fontFamily: "Shantell Sans",
                    backgroundColor: "green",
                  }}
                >
                  Tutorial
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      to="/tutorial1"
                      style={{ color: "green", fontFamily: "Shantell Sans" }}
                    >
                      Lettuce
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="tutorial2">
                    <Link
                      to="/tutorial2"
                      style={{ color: "green", fontFamily: "Shantell Sans" }}
                    >
                      Celery
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="tutorial3">
                    <Link
                      to="/tutorial3"
                      style={{ color: "green", fontFamily: "Shantell Sans" }}
                    >
                      Spinach
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
