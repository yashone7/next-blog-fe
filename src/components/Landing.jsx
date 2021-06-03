import React from "react";
import "../style/landing.css";
import Login from "./Login";
import { Redirect } from "react-router-dom";

const Landing = (props) => {
  if (props.state.isAuthenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="landing">
      <div className="flex justify-center">
        <div className="left-column">
          <h1 className="brand-heading">Connectly</h1>
          <p className="brand-subhead">
            An app dedicated to sharing short stories and forming connections
          </p>
        </div>
        <div className="right-column">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Landing;
