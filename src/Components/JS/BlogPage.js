import React from 'react'
import "../CSS/BlogPage.css"
import NavBar from './NavBar'
import Footer from './Footer'
import { FaFacebookF, FaLinkedinIn  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiUser, CiHeart  } from "react-icons/ci";
import { GoComment } from "react-icons/go";





const BlogPage = () => {
  return (
    <>
    <nav>
    <NavBar/>
    </nav>
    <section className="BPageSection1">
        <div className="BPS1Mainbox1">
            <div className="BPS1M1B1">
                <div className="BPS1M1B11">
                    <div className="BPS1M1B111">
                        <button className="BPS1M1B111Para1">HIGHLY CREATIVE AND FLXING ELEMENTS</button>
                        <h1 className="BPS1M1B111Para2">BLOG LEFT SIDEBAR</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="BPageSection2">
        <div className="BPS2Mainbox1">
            <div className="BPS2M1B1">
                <input type="text" placeholder="Enter Your Keywords" className="BPS2M1B1Para1"/>
                <div className="BPS2M1B1Para2">
                    <h6>ABOUT ME</h6>
                    <div className="BPS2M1B1Para2Img1"></div>
                    <h6>Melody Rose</h6>
                    <p>Welcome to everyday my lifestyle I'm melody rose printing & typesetting industry.</p>
                </div>
                <div className="BPS2M1B1Para3">
                    <h6>FOLLOW US</h6>
                    <p><FaFacebookF />&nbsp;&nbsp;<FaXTwitter />&nbsp;&nbsp;<AiOutlineGlobal />&nbsp;&nbsp;<FaLinkedinIn /></p>
                </div>
                <div className="BPS2M1B1Para4">
                    <button className="BPS2M1B1Para4Btn1">EXPLORE FASHION WEEK</button>
                </div>
                <div className="BPS2M1B1Para5">
                    <h6 className="BPS2M1B1Para5Head">CATEGORIES</h6>
                    <p className="BPS2M1B1Para5Head">1: Adventure</p>
                    <p className="BPS2M1B1Para5Head">2: Advertisment</p>
                    <p className="BPS2M1B1Para5Head">3: Clean</p>
                    <p className="BPS2M1B1Para5Head">4: Designer</p>
                    <p className="BPS2M1B1Para5Head">5: Education</p>
                    <p className="BPS2M1B1Para5Head">6: Fashion</p>
                    <p className="BPS2M1B1Para5Head">7: Luxurious</p>
                    <p className="BPS2M1B1Para5Head">8: Newspaper</p>
                    <p className="BPS2M1B1Para5Head">9: Photography</p>
                    <p className="BPS2M1B1Para5Head">10: Postlayout</p>
                </div>
                <div className="BPS2M1B1Para6">
                    <h6>POPULAR POST</h6>
                    <div className="BPS2M1B1Para6ImgBox1"></div>
                    <p>My inspiration for interior design</p>
                    <div className="BPS2M1B1Para6Box2">
                        <div className="BPS2M1B1Para6Box11"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="BPS2M1B1Para6Box3">
                        <div className="BPS2M1B1Para6Box12"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="BPS2M1B1Para7">
                    <h6>TAGS CLOUD</h6>
                    <button className="BPS2M1B1Para7Btn1">ARTISTRY</button>&nbsp;&nbsp;&nbsp;
                    <button className="BPS2M1B1Para7Btn1">ADVERTISMENT</button>&nbsp;&nbsp;&nbsp;
                    <button className="BPS2M1B1Para7Btn1">BLOG</button>&nbsp;&nbsp;&nbsp;
                    <button className="BPS2M1B1Para7Btn1">CONCEPTUAL</button>&nbsp;&nbsp;&nbsp;
                    <button className="BPS2M1B1Para7Btn1">FASHION</button>&nbsp;&nbsp;&nbsp;
                    <button className="BPS2M1B1Para7Btn1">LAYOUT</button>&nbsp;&nbsp;&nbsp;
                </div>
                <div className="BPS2M1B1Para8">
                    <h6 className="BPS2M1B1Para5Head">ARCHIVE</h6>
                    <p className="BPS2M1B1Para5Head">1: MARCH 2019</p>
                    <p className="BPS2M1B1Para5Head">2: FEBRUARY 2019</p>
                    <p className="BPS2M1B1Para5Head">3: JANUARY 2019</p>
                    <p className="BPS2M1B1Para5Head">4: NOVEMBER 2019</p>
                    <p className="BPS2M1B1Para5Head">5: SEPTEMBER 2019</p>
                    <p className="BPS2M1B1Para5Head">6: AUGUST 2019</p>
                    <p className="BPS2M1B1Para5Head">7: JULY 2019</p>
                    <p className="BPS2M1B1Para5Head">8: JUNE 2019</p>
                </div>
                <div className="BPS2M1B1Para9">
                    <h6>NEWSLETTER</h6>
                    <p>Subscribe to our newsletter and stay updated to our best offers and deals!</p>
                </div>
            </div>
            <div className="BPS2M1B2">
                <div className="BPS2M1B2Para1">
                    <div className="BPS2M1B2Para1ImgBox1"></div>
                    <p>Standard 27 August 2018</p>
                    <h5>This is a Standard post with a preview image</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy 
                        text of the printing and typesetting industry.</p>
                    <button className="BPS2M1B2Para1Btn1">CONTINUE READING</button>
                    <div className="BPS2M1B2Para1Box34">
                        <button className="BPS2M1B2Para1Box34Btn1"><CiUser />&nbsp; By Alexis Richard</button>
                        <button className="BPS2M1B2Para1Box34Btn2"><CiHeart  />&nbsp; 100 Like</button>
                        <button className="BPS2M1B2Para1Box34Btn3"><GoComment  />&nbsp; 3 Comments</button>
                    </div>
                </div>
                <div className="BPS2M1B2Para1">
                    <div className="BPS2M1B2Para1ImgBox2"></div>
                    <p>Standard 27 August 2018</p>
                    <h5>This is a Standard post with a preview image</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy 
                        text of the printing and typesetting industry.</p>
                    <button className="BPS2M1B2Para1Btn1">CONTINUE READING</button>
                    <div className="BPS2M1B2Para1Box34">
                        <button className="BPS2M1B2Para1Box34Btn1"><CiUser />&nbsp; By Alexis Richard</button>
                        <button className="BPS2M1B2Para1Box34Btn2"><CiHeart  />&nbsp; 100 Like</button>
                        <button className="BPS2M1B2Para1Box34Btn3"><GoComment  />&nbsp; 3 Comments</button>
                    </div>
                </div>
                <div className="BPS2M1B2Para1">
                    <div className="BPS2M1B2Para1ImgBox3"></div>
                    <p>Standard 27 August 2018</p>
                    <h5>This is a Standard post with a preview image</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy 
                        text of the printing and typesetting industry.</p>
                    <button className="BPS2M1B2Para1Btn1">CONTINUE READING</button>
                    <div className="BPS2M1B2Para1Box34">
                        <button className="BPS2M1B2Para1Box34Btn1"><CiUser />&nbsp; By Alexis Richard</button>
                        <button className="BPS2M1B2Para1Box34Btn2"><CiHeart  />&nbsp; 100 Like</button>
                        <button className="BPS2M1B2Para1Box34Btn3"><GoComment  />&nbsp; 3 Comments</button>
                    </div>
                </div>
                <div className="BPS2M1B2Para1">
                    <div className="BPS2M1B2Para1ImgBox4"></div>
                    <p>Standard 27 August 2018</p>
                    <h5>This is a Standard post with a preview image</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy 
                        text of the printing and typesetting industry.</p>
                    <button className="BPS2M1B2Para1Btn1">CONTINUE READING</button>
                    <div className="BPS2M1B2Para1Box34">
                        <button className="BPS2M1B2Para1Box34Btn1"><CiUser />&nbsp; By Alexis Richard</button>
                        <button className="BPS2M1B2Para1Box34Btn2"><CiHeart  />&nbsp; 100 Like</button>
                        <button className="BPS2M1B2Para1Box34Btn3"><GoComment  />&nbsp; 3 Comments</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
    <Footer/>
    </footer>
    </>
  )
}

export default BlogPage
