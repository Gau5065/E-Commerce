import React from 'react'
import "../CSS/ContactUs.css"
import NavBar from './NavBar'
import Footer from './Footer'
import { FaHeadphones } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { RiEditBoxLine } from "react-icons/ri";


const ContactUs = () => {
  return (
    <>
    <nav>
      <NavBar/>
    </nav>
    <section className="aboutSection1">
        <div className="aboutS1Mainbox1">
            <div className="abS1M1B1">
              <div className="abS1M1B11">
                <button className="abS1M1B11Para1">THE TRUTH TOUCHES US</button>
                <h1 className="abS1M1B11Para2">CONTACT CLASSIC</h1>
              </div>
            </div>
        </div>
    </section>
    <section className="aboutSection2">
        <div className="aboutS2Mainbox1">
          <div className="abS2M1B1">
          <p className="abS2M1B1Para1">STAY TOUCH WITH US</p>
          <h3 className="abS2M1B1Para2">Contact us to find out <br></br>more or how we can help you</h3>
          </div>
        </div>
    </section>
    <section className="aboutSection3">
        <div className="aboutS3Mainbox1">
          <div className="abS3M1B1"></div>
          <div className="abS3M1B2"></div>
          <div className="abS3M1B3"></div>
          <div className="abS3M1B4"></div>
        </div>
    </section>
    <section className="aboutSection4">
        <div className="aboutS4Mainbox1">
            <div className="abS4M1B1">
              <h1 className="abS4M1B1Para1">22</h1>
              <p className="abS4M1B1Para2">HAPPY CLIENTS</p>
            </div>
            <div className="abS4M1B2">
              <h1 className="abS4M1B2Para1">30</h1>
              <p className="abS4M1B2Para2">WORK COMPLETE</p>
            </div>
            <div className="abS4M1B3">
              <h1 className="abS4M1B3Para1">52</h1>
              <p className="abS4M1B3Para2">AWARD WINING</p>
            </div>
            <div className="abS4M1B4">
              <h1 className="abS4M1B4Para1">28</h1>
              <p className="abS4M1B4Para2">TELEPHONIC TALK</p>
            </div>
        </div>
    </section>
    <section className="aboutSection5">
      <div className="aboutS5Mainbox1">
        <div className="abS5M1B1">
          <h1 className="abS5M1B1Para1">We Would Love</h1>
        </div>
      </div>
    </section>
    <section className="aboutSection6">
        <div className="aboutS6Mainbox1">
            <div className="abS6M1B1"></div>
            <div className="abS6M1B2"></div>
            <div className="abS6M1B3">
              <h4 className="abS6M1B3Para1">How We Help You ?</h4>
              <div className="abS6M1B3Para2">
                <FaHeadphones className="abS6M1B3Para2Icon1"/>
                <h6>Have any questions? Reach us by phone</h6>
                <p>1-800-222-000 / 1-800-222-002</p>
              </div>
              <div className="abS6M1B3Para3">
                <IoMailSharp className="abS6M1B3Para3Icon1"/>
                <h6>Have any questions? Reach us by phone</h6>
                <p>1-800-222-000 / 1-800-222-002</p>
              </div>
              <div className="abS6M1B3Para4">
                <RiEditBoxLine className="abS6M1B3Para4Icon1"/>
                <h6>Have any questions? Reach us by phone</h6>
                <p>1-800-222-000 / 1-800-222-002</p>
              </div>
            </div>
        </div>
    </section>
    <section className="aboutSection7">
        <div className="aboutS7Mainbox1">
          <div className="abS7M1B1">
            <h4>You could argue that fashion has been playing the content marketing game 
              for a long time now. Fashion shop feelings and relax day enjoy happy weekend!</h4>
          </div>
          <div className="abS7M1B2">
            <p>Lorem Ipsum is simply dummy text of the typesetting industry It has survived 
              not only five centuries, but also the leap into electronic typesetting, remaining 
              essentially of unchanged lorem Ipsum is simply dummy text of the printing and text 
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and industry. 
              Lorem Ipsum is simply dummy text of the typesetting industry It has survived not only 
              five centuries.</p>
          </div>
        </div>
    </section>
    <section className="aboutSection8">
        <div className="aboutS8Mainbox1">
          <div className="abS8M1B1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2153349135674!2d72.84961067590007!3d19.229444882006934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d42c95bdf9%3A0x5a3374a957943f4b!2sTryCatch%20Classes%20%7C%20Full%20Stack%20Web%20Development%20%7C%20Android%20IOS%20Flutter%20%7C%20Digital%20Marketing%20%7C%20UIUX%20Training!5e0!3m2!1sen!2sin!4v1705684918997!5m2!1sen!2sin" width="100%" height="100%"></iframe>
          </div>
          <div className="abS8M1B2">
            <p className="abS8M1B2Para1">FILL OUT THE FORM AND WE'LL GET BACK SOON!</p>
            <h5 className="abS8M1B2Para2">Contact us to find out more or how we can help you</h5>
            <input type="text" className="abS8M1B2Para3" placeholder="Name"/><br></br><br></br>
            <input type="text" className="abS8M1B2Para3" placeholder="Email"/><br></br><br></br>
            <input type="text" className="abS8M1B2Para3" placeholder="Subject"/><br></br><br></br>
            <input type="text" className="abS8M1B2Para3" placeholder="Your Message"/><br></br><br></br>
            <button className="abS8M1B2Para4">SEND MESSAGE</button>
          </div>
          <div className="abS8M1B3"></div>
        </div>
    </section>
    <section className="aboutSection9">
        <div className="aboutS9Mainbox1">
          <div className="abS9M1B1">
            <h2 className="abS9M1B1Para1">FREE SHIPPPING</h2>
          </div>
          <div className="abS9M1B2">
            <p className="abS9M1B2Para1">Easy return-free shipping<br></br>on all orders over £99</p>
            <button className="abS9M1B2Para2">SHOP COLLECTION</button>
          </div>
        </div>
    </section>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default ContactUs
