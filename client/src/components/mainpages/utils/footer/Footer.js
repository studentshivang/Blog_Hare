import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className="card " id="footer" style={{"backgroundColor":"#e3f2fd"}}>
        <h5 className="card-header text-center">
          ©{new Date().getFullYear()} Shree Radhe
        </h5>
      </div>
    </>
  );
};
export default Footer;
