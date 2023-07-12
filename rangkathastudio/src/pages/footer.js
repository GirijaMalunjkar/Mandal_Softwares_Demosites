import React from "react";
import '../assets/css/footer.css';   

const Footer = ({refProp}) => {
    return (
        <div ref = {refProp} className="footer" style={{position: "relative"}}>
            <div className='footer-Icon'><i className="fa-brands fa-instagram"></i></div>
            <h1>Pune |  example@gmail.com  |  M - 8308287358 </h1>
        </div>
    );
}
export default Footer;