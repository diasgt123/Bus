import React, { useState } from "react"
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import bus_image from '../Assets/bus.png'
import dot1_image from '../Assets/dot1.png'
import dot2_image from '../Assets/dot2.png'
import qr_image from '../Assets/qr.png'
import g_image from '../Assets/google.png'

const LoginSignup = () => {


    const[action,setAction]= useState("Sign Up");

    return (

        <div className="page">
            {/* <div className="background">
                <div className="heading">QRide</div>
            </div> */}
            <div className="row">
                <div className="column">
                    <div className="text1">QRide</div>
                    <img className="qr" src={qr_image} alt="" />
                    {/* <h1 className="text1">Effortless Bus Travel</h1>
                    <h1 className="text2">Scan, Know, Go!</h1>
                    <h3 className="text3">Streamline your bus journey with a single scan.</h3>
                    <img className="bus" src={bus_image} alt="" /> */}
                    {/* <img className="dot1"src={dot1_image} alt="" /> */}
                    {/* <img className="dot2"src={dot2_image} alt="" /> */}
                </div>
                <div className="column1">
                    <div className="text2">Register</div>
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder="    Enter Full Name"/>
                        </div>
                        <div className="input">
                            <input type="email" placeholder="    Enter Email"/>
                        </div>
                        <div className="input">  
                           <input type="password" placeholder="    Password"/>
                        </div>
                    </div>
                    <div className="submit">
                       Sign In
                    </div>
                    <div className="signgoogle">
                        Sign In with Google   
                           {/* <img className="google"src={g_image} alt="" /> */}
                       
                    </div>
                </div>
                {/* <div className="column">
                    <div className="login">
                        <div className="container">
                            <div className="header">
                                <div className="text">{action}</div>
                                <div className="underline"></div>
                            </div>
                            <div className="inputs">
                                {action==="Login"?<div></div>:<div className="input">
                                    <img src={user_icon} alt="" />
                                    <input type="text" placeholder="Name"/>
                                </div>}
                                
                                <div className="input">
                                    <img src={email_icon} alt="" />
                                    <input type="email" placeholder="Email Id"/>
                                </div>
                                <div className="input">
                                    <img src={password_icon} alt="" />
                                    <input type="password" placeholder="Password"/>
                                </div>
                            </div>
                            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                            
                            <div className="submit-container">
                                <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
                            </div>
                        </div>
                </div>
                </div> */}

            </div>
            
        </div>
    )
}
export default LoginSignup