import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content ">
            <div className="col">
             <div className="title">About</div>
             <div className="text">eleifend donec pretium vulputate sapien nec sagittis aliquam 
             malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim 
             sodales ut eu sem integer vitae justo eget magna fermentum iaculis</div>
            </div>
            <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">
                  Kayalooram Rd,Punnamda,Kerla,583950
                </div>
            </div>
            <div className="c-item">
                <FaMobileAlt/>
                <div className="text">
                  Phone: 0453 1234 2341
                </div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">
                  Email: store@jsdev.in
                </div>
            </div>
            </div>
            <div className="col">
            <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
            </div>
            <div className="col">
            <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
             </div>
        </div>
       <div className="bottom-bar ">
        <div className="bottom-bar-content">
        <span className="text">
                        JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE
                        SOLUTIONS.
        </span>
        <img src={Payment} />
        </div>
        </div>  
    </footer>;
};
 
export default Footer;
 