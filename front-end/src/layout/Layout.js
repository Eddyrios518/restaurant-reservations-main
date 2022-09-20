import React from "react";
import Routes from "./Routes";
import Menu from "./Menu";
import "./Layout.css";
/**
 * Defines the main layout of the application.
 * You will not need to make changes to this file.
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div
      className="container-fluid bg-dark"
      style={{
        fontFamily: "Brush Script MT",
        // backgroundColor: "#FFB93A",
        // backgroundColor: 
        color: "white",
        height: "200vh",
        // width: "200vh"
      }}
    >
      <div className="row">
        <div className="col-2 p-8">
          <Menu />
        </div>
        <div className="col-10">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;