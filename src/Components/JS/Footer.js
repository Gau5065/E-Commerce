import React from 'react'
import "../CSS/Footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram,FaCcMastercard } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP, FaCcVisa,FaCcPaypal   } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsCreditCard2BackFill } from "react-icons/bs";





const Footer = () => {
  return (
    <>
    <footer>
        <div className="F1Mainbox1">
            <div className="F1M1B1">
                <p className="F1M1B1Title">LAST CHANCE TO WIN OUR DISCOUNT !</p>
                <input type="text" className="F1M1B1Input" placeholder="enter your email..."/>
                <button className="F1M1B1Btn1">SUBSCRIBE</button>
            </div>
            <div className="F1M1B2">
              <ul className="F1M1B2List1">
                <li>ON SOCIAL NETWORK</li>
                <li><FaFacebookF /></li>
                <li><BsTwitterX /></li>
                <li><FaLinkedinIn /></li>
                <li><FaInstagram /></li>
                <li><FaPinterestP /></li>
              </ul>
            </div>
        </div>
        <div className="F1Mainbox2">
            <div className="F1M2B1">
              <h5><b>HON</b>GO</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry lorem Ipsum is simply dummy text 
                of industry lorem ipsum is simply dummy typesetting text.</p>
            </div>
            <div className="F1M2B2">
              <h5>CATEGORY</h5>
              <ul className="F1M2B2List">
                <li>Women Collection</li>
                <li>Men Collection</li>
                <li>Child Collection</li>
                <li>Accessories</li>
                <li>Leather Shoes</li>
              </ul>
            </div>
            <div className="F1M2B3">
              <h5>CUSTOMERS</h5>
              <ul className="F1M2B3List">
                <li>Help And Support</li>
                <li>Shipping And Delivery</li>
                <li>Payment Method</li>
                <li>Terms And Conditions</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="F1M2B4">
            <h5>COMPANY</h5>
              <ul className="F1M2B4List">
                <li>About Company</li>
                <li>Our Service</li>
                <li>Get In Voucher</li>
                <li>Store Locator</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="F1M2B5"> 
            <h5>FOLLOW US ON INSTAGRAM</h5>
            <div className="F1M2B5List1Li1"></div>
            <div className="F1M2B5List1Li2"></div>
            <div className="F1M2B5List1Li3"></div>
            <div className="F1M2B5List1Li4"></div>
            <div className="F1M2B5List1Li5"></div>
            <div className="F1M2B5List1Li6"></div>
            <div className="F1M2B5List1Li7"></div>
            <div className="F1M2B5List1Li8"></div>
            </div>
        </div>
        <div className="F1Mainbox3">
            <h6><AiOutlineCopyrightCircle />HONGO is Proudly Powered ByThemeZaa</h6>
            <ul className="F1M3B1List1">
              <li><FaCcVisa /></li>
              <li><FaCcMastercard /></li>
              <li><BsCreditCard2BackFill /></li>
              <li><FaCcPaypal  /></li>
              <li><FaCcVisa /></li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer
