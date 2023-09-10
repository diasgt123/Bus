import React, { useState } from "react";
import './LoginSignup.css';

import qr_image from '../Assets/qr.png';
import g_image from '../Assets/google.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className="page">
            <div className="row">
                <div className="column">
                    <div className="text1">QRide</div>
                    <img className="qr" src={qr_image} alt="" />
                    <div className="column-fill"></div>
                </div>
                <div className="column1">
                    <div className="text2">{action === "Sign Up" ? "Register" : "Login"}</div>
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder="Enter Full Name" />
                        </div>
                        <div className="input">
                            <input type="email" placeholder="Enter Email" />
                        </div>
                        <div className="input">
                            <input type="password" placeholder="Password" />
                        </div>
                    
                    <div className="submit">Sign In</div>
                    <div className="signgoogle">
                        Sign In with Google
                        <img className="google" src={g_image} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
