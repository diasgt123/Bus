import React from "react";
import "./Scan.css";
import bus_image from "../Assets/bus.png";
import bus1_image from "../Assets/bus1.png";
import profile_image from "../Assets/profile.png";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const navigate = useNavigate();
  const navigateToQr = () => {
    navigate("/Qr");
  };
  return (
    <div className="page2">
      <header className="header">
        <div className="row">
          <h1 className="heading-left">QRide</h1>
          <img className="profile" src={profile_image} alt="" />
        </div>
      </header>
      <main className="main-content">
        <div className="text">
          <h2 className="text1">Effortless Bus Travel</h2>
          <h3 className="text2">Scan, Know, Go!</h3>
          <p className="text3">
            Streamline your bus journey with a single scan.
          </p>
        </div>
        <div className="busdiv">
        <img className="bus-image" src={bus1_image} width="600" height="300" alt="Bus" />
        </div>
        
        <button className="scan-button" onClick={navigateToQr}>
          Scan now
        </button>
      </main>
    </div>
  );
};

export default Scan;
