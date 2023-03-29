import React, { useEffect } from "react";
import Navbar from "../components/NavBar";

const Layout = (props) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage:
            "url('https://www.pixelstalk.net/wp-content/uploads/images1/Backgrounds-Plant.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // width: "100vw",
          height: "92vh",
          backgroundPosition: "center center",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
