import React from 'react'
import "../CSS/AboutUs.css"
import NavBar from './NavBar'
import Footer from './Footer'
import { FaBagShopping } from "react-icons/fa6";
import { FaUmbrella, FaRegStar, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGift } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";


const AboutUs = () => {
  return (
    <>
    <nav>
        <NavBar/>
    </nav>
    <section className="contactSection1">
        <div className="ConS1Mainbox1">
        <div className="conS1M1b1Box1"></div>
            <div className="conS1M1b1">
                <button className="conS1M1b1Para1">WE PROVIDE LATEST FASHION BRANDS</button>
                <h1 className="conS1M1b1Para2">ABOUT CLASSIC</h1>
            </div>
        </div>
    </section>
    <section className="contactSection2">
        <div className="conS2Mainbox1">
            <p className="conS2Mainbox1Para1">- START FROM SINCE 1998 -</p>
            <h6 className="conS2Mainbox1Para2">Get The latest Fashion Trends, Style editors <br></br>give you behind the scene style tips</h6>
        </div>
    </section>
    <section className="contactSection3">
        <div className="conS3Mainbox1">
            <div className="conS1M1B1"></div>
            <div className="conS1M1B2"></div>
            <div className="conS1M1B3"></div>
        </div>
    </section>
    <section className="contactSection4">
        <div className="conS4Mainbox1">
            <div className="conS4M1B1">
                <p className="conS4M1B1Para1">ELEGANT. VINTAGE. CLASSIC</p>
                <h3 className="conS4M1B1Para2">Fashion is just another accessory for someone with great style</h3>
                <p className="conS4M1B1Para3">Focused, hard work is the real key to success. Keep your eyes on the goal, 
                    & just keep taking the next step towards completing it. If you aren't sure which way to do something.</p>
            </div>
            <div className="conS4M1B2">
                <div className="conS4M1B2Box1">
                    <FaBagShopping className="conS4M1B2Box1Icon1"/>
                    <h6>Stylish Forever</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                </div>
                <div className="conS4M1B2Box2">
                    <FaUmbrella className="conS4M1B2Box1Icon2"/>
                    <h6>Summer Shopping</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                </div>
                <div className="conS4M1B2Box3">
                    <LuGift className="conS4M1B2Box1Icon3"/>
                    <h6>Celebration</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                </div>
                <div className="conS4M1B2Box4">
                    <FaRegStar className="conS4M1B2Box1Icon4"/>
                    <h6>Outfit Trends</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                </div>
            </div>
        </div>
    </section>
    <section className="conSection5">
        <div className="conS5Mainbox1">
            <div className="conS5M1B1">
                <div className="conS5M1B11">
                    <h6 className="conS5M1B11Para1">- GET UP TO 70% OFF ON COLLECTION</h6>
                    <h4 className="conS5M1B11Para2">New fashion collection style for your elegant look. Always love to be fashion</h4>
                    <p className="conS5M1B11Para3">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum 
                        has been the industry's standard dummy text ever since the when an printer took a 
                        galley of type scrambled it to make a type book. Lorem Ipsum is simply dummy text 
                        of the printing and typesetting industry type scrambled it to make a type book.</p>
                    <button className="conS5M1B11Para4">VIEW COLLECTION</button>
                </div>
            </div>
        </div>
    </section>
    <section className="contactSection6">
        <div className="conS6Mainbox1">
            <div className="conS6M1B1">
                <div className="conS6M1B1Para1"><h6 className="conS6M1B1Para11">1998</h6></div>
                <h6>Open store in manchester</h6>
                <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy text.</p>
            </div>
            <div className="conS6M1B2">
                <div className="conS6M1B2Para1"><h6 className="conS6M1B1Para11">1998</h6></div>
                <h6>Open store in manchester</h6>
                <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy text.</p>
            </div>
            <div className="conS6M1B3">
                <div className="conS6M1B3Para1"><h6 className="conS6M1B1Para11">1998</h6></div>
                <h6>Open store in manchester</h6>
                <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy text.</p>
            </div>
        </div>
    </section>
    <section className="contactSection7">
        <div className="conS7Mainbox1">
            <div className="conS7M1B1"></div>
            <div className="conS7M1B2"></div>
            <div className="conS7M1B3"></div>
        </div>
    </section>
    <section className="contactSection8">
        <div className="conS8Mainbox1">
            <div className="conS8M1B1">
                <div className="conS8M1B11">01</div>
                <h6 className="conS8M1B11Para1">Men's Collection</h6>
                <p className="conS8M1B11Para2">Best Winter Trends</p>
                <p className="conS8M1B11Para3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
            </div>
            <div className="conS8M1B1">
                <div className="conS8M1B11">02</div>
                <h6 className="conS8M1B11Para1">Women's Collection</h6>
                <p className="conS8M1B11Para2">Best Winter Trends</p>
                <p className="conS8M1B11Para3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
            </div>
            <div className="conS8M1B1">
                <div className="conS8M1B11">03</div>
                <h6 className="conS8M1B11Para1">Children's Collection</h6>
                <p className="conS8M1B11Para2">Best Winter Trends</p>
                <p className="conS8M1B11Para3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
            </div>
        </div>
    </section>
    <section className="contactSection9">
        <div className="conS9Mainbox1">
            <div className="conS9M1B1"></div>
        </div>
    </section>
    <section className="contactSection10">
        <div className="conS10Mainbox1">
            <div className="conS10M1B1">
                <div className="conS10M1B11">
                    <div className="conS10M1B111">
                    <IoPlayCircleOutline />
                    </div>
                </div>
                <div className="conS10M1B12">
                    <p className="conS10M1B12Para1">FASHION BRAND THAT CONTEMPORARY</p>
                    <h2 className="conS10M1B12Para2">Comfort and simplicity are two keys that I follow when it comes</h2>
                    <p className="conS10M1B12Para3">It has has survived not only five centuries, but its also the leap into electronic 
                        typesetting leap into life electronic typesetting. Get the latest fashion trends, 
                        news and runway reports with looks. Lorem Ipsum is simply dummy text.
                        It has has survived not only five centuries, but its also the leap into electronic 
                        typesetting leap into life electronic typesetting survived not only.</p>
                    <button className="conS10M1B12Para4">MORE INFORMATION</button>
                </div>
            </div>
        </div>
    </section>
    <section className="contactSection11">
        <div className="conS11Mainbox1">
            <div className="conS11M1B1">
                <div className="conS11M1B1Img1">
                    <div className="conS11M1B1Img1Box1">
                    <FaFacebookF className="conS11M1B1Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    <FaXTwitter className="conS11M1B1Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    <FaLinkedinIn className="conS11M1B1Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <h6>JERMY DUPONT</h6>
                <p>CREATIVE DIRECTOR</p>
            </div>
            <div className="conS11M1B2">
                <div className="conS11M1B2Img1">
                <div className="conS11M1B2Img1Box1">
                    <FaFacebookF className="conS11M1B2Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    <FaXTwitter className="conS11M1B2Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    <FaLinkedinIn className="conS11M1B2Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <h6>JERMY DUPONT</h6>
                <p>CREATIVE DIRECTOR</p>
            </div>
            <div className="conS11M1B3">
                <div className="conS11M1B3Img1">
                <div className="conS11M1B3Img1Box1">
                    <FaFacebookF className="conS11M1B3Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    <FaXTwitter className="conS11M1B3Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    <FaLinkedinIn className="conS11M1B3Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <h6>JERMY DUPONT</h6>
                <p>CREATIVE DIRECTOR</p>
            </div>
            <div className="conS11M1B4">
                <div className="conS11M1B4Img1">
                <div className="conS11M1B4Img1Box1">
                    <FaFacebookF className="conS11M1B4Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    <FaXTwitter className="conS11M1B4Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    <FaLinkedinIn className="conS11M1B4Img1Box1Icon1"/>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <h6>JERMY DUPONT</h6>
                <p>CREATIVE DIRECTOR</p>
            </div>
        </div>
    </section>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default AboutUs
