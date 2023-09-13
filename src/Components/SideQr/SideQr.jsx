import './SideQr.css'
import React from 'react'
import qr_image from '../Assets/qr.png';
const SideQr = () => {
  return (
    <div className="column">
    <div className="text1">QRide</div>
    <img className="qr" src={qr_image} alt="" />
    <div className="column-fill"></div>
</div>
  )
}

export default SideQr