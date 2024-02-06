import "../CSS/HomePage.css";
import Footer from './Footer';
import NavBar from './NavBar';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'; 
import React, { useEffect, useState } from 'react'
import { CiSearch, CiUser, CiHeart, CiShoppingCart, CiWallet } from "react-icons/ci";
import { FaBars, FaArrowDown, FaShoppingCart,FaArrowRight } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { AiFillLayout, AiOutlineGlobal } from "react-icons/ai";
import { LiaGiftSolid } from "react-icons/lia";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";

const HomePage = () => {
    const [ImgScrollData, setImgScrollData] = useState([]);
    const [GreatProduct, setGreatProduct] = useState([]);
    const [WishProductList, setWishProductList] = useState([]);
    const [CartProductList, setCartProductList] = useState([]);

    useEffect(()=>{
        // Fetching All Data Of Image Scroll
        axios.get("http://localhost:8080/scroll/image")
            .then(function (response) {
            setImgScrollData(response.data);
        })

        // Fetching All Great Products
        axios.get("http://localhost:8080/great/get")
            .then(function (response) {  
            setGreatProduct(response.data);
        })

        // Fetching All WishList Products
        axios.get("http://localhost:8080/wishlist/get")
            .then(function (response) {
            setWishProductList(response.data);
        })

        // Updating Cart Product List
        updateCartProductList();

        // Updating WishList Product List
        updateWishlistProductList();

    },[])

    const updateCartProductList = () =>{
        // Fetching Cart Products
        axios.get("http://localhost:8080/cart/get")
            .then(function (response) {
            setCartProductList(response.data);
        })
    }

    const updateWishlistProductList = () =>{
        // Fetching Cart Products
        axios.get("http://localhost:8080/wishlist/get")
            .then(function (response) {
            setWishProductList(response.data);
        })
    }

    const addCartDetail = (e) =>{
        var count1 = 0;
        CartProductList.map((cart, index)=>{
            if(e.gproduct_id == cart.product_id){
                count1++;
            }
        })

        if(count1 > 0){
            alert("Product Added To Cart");
            CartProductList.map((cart, index)=>{
                if(e.gproduct_id == cart.product_id){
                    var pq = cart.product_quantity + 1;
                    axios.put("http://localhost:8080/cart/edit/"+cart.cproduct_id, {
                        "product_id": e.gproduct_id,
                        "product_name": e.gproduct_name,
                        "product_description": e.gproduct_description,
                        "product_price": e.gproduct_price,
                        "product_discount": e.gproduct_discount,
                        "product_category": e.gproduct_category,
                        "product_imgurl": e.gproduct_imgurl,
                        "product_quantity": pq
                    })
                    .then(function (response) {
                        // Response Here
                    updateCartProductList();
                    })
                    .catch(function (error) {
                        // Error Here
                    });  
                }
            })
        }else{
            alert("Product Added To Cart")
            axios.post("http://localhost:8080/cart/add", {
                "product_id": e.gproduct_id,
                "product_name": e.gproduct_name,
                "product_description": e.gproduct_description,
                "product_price": e.gproduct_price,
                "product_discount": e.gproduct_discount,
                "product_category": e.gproduct_category,
                "product_imgurl": e.gproduct_imgurl,
                "product_quantity": 1
            })
            .then(function (response) {
                // Response Here
            updateCartProductList();
            })
            .catch(function (error) {
                // Error Here
            });  
        }
    }

    const addWishDetail = (e) =>{
        var count1 = 0;
        WishProductList.map((wish, index)=>{
            if(e.gproduct_id == wish.product_id){
                count1++;
            }
        })

        if(count1 > 0){
            alert("This product is already in your wishlist");
        }else{
            alert("Product Added To Your WishList")
            axios.post("http://localhost:8080/wishlist/add", {
                "product_id": e.gproduct_id,
                "product_name": e.gproduct_name,
                "product_description": e.gproduct_description,
                "product_price": e.gproduct_price,
                "product_discount": e.gproduct_discount,
                "product_category": e.gproduct_category,
                "product_imgurl": e.gproduct_imgurl
            })
            .then(function (response) {
                // Responce Here
            updateWishlistProductList();
            })
            .catch(function (error) {
                // Error Here
            });
        }
    }
     
    const goToProductPage = (a) =>{
        window.location = "/product/great/"+a.gproduct_id;
    }

  return (
    <>
    <NavBar/>
    <section className="Section1">
        <div className="S1Mainbox1"> 
        <Carousel> 
        {
            ImgScrollData.map((scroll, index)=>{
                return(
                    <Carousel.Item interval={2000} className="S1M1B1" key={index+scroll}> 
                        <img 
                        className="d-block w-100" 
                        src={scroll.img_url}
                        alt="Image One"/> 
                        <div className="S1M1B11">
                            <p className="S1M1B11Description">2019 NEW COLLECTION</p>
                            <p className="S1M1B11Title">{scroll.img_title}</p>
                            <p className="S1M1B11Description">{scroll.img_description}</p>
                            <button className="S1M1B11Button">SHOP COLLECTION</button>
                        </div>
                    </Carousel.Item>
                );
            })
        }
        </Carousel> 
        <a href="#GreatSelection"><button className='downArrow1'><FaArrowDown /></button></a>
        </div> 
    </section>
    <section className="Section2">
        <div className="S2Mainbox1">
            <div className="S2M1B1">
                <div className="S2M1B11">
                    <div className="S2M1B111">
                        <h2 className="S2M1B111Title">Accessories Collection</h2>
                        <button className="S2M1B111Btn">SHOP NOW</button>
                    </div>
                </div>
                <div className="S2M1B12">
                <div className="S2M1B121">
                        <h2 className="S2M1B121Title">Men Collection</h2>
                        <button className="S2M1B121Btn">SHOP NOW</button>
                    </div>
                </div>
                <div className="S2M1B13"></div>
            </div>
            <div className="S2M1B2">
            <div className="S2M2B21">
                <div className="S2M1B211">
                    <h2 className="S2M1B211Title">Accessories Collection</h2>
                    <button className="S2M1B211Btn">SHOP NOW</button>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section className="Section3">
        <div className="S3Mainbox1">
            <TbMinusVertical className="S3M1Icon"/>
            <h2 className="S3M1Title" id="GreatSelection">Great Selection</h2>
            <p className="S3M1Description">Follow the most popular trends and get <br></br>exclusive items from hongo shop</p>
        </div>
    </section>
    <section className="Section4">
        <div className="S4Mainbox1">
            {
                GreatProduct.map((great, index)=>{
                    var DP = Math.floor(((great.gproduct_price - great.gproduct_discount) / great.gproduct_price) * 100);
                    return(
                        <div className="S4M1Card1" key={index+great}>
                            <div className="S4M1Card1B1">
                                <button className="S4M1Card1B1DiscountBtn1">-{DP}%</button>
                                <button className="S4M1Card1B1HeartBtn1" onClick={()=>addWishDetail(great)}><CiHeart /></button>
                                <img src={great.gproduct_imgurl} onClick={()=>goToProductPage(great)}/>
                                <div className="S4M1Card1B1HoverBox1">
                                    <button className="S4M1Card1B1HoverBox1Icon" onClick={()=>addCartDetail(great)}><FaShoppingCart /></button>
                                    <button className="S4M1Card1B1HoverBox1Icon"><FiEye /></button>

                                </div>
                            </div>
                            <div className="S4M1Card1B2">
                                <h3 className="S4M1Card1B2Title">{great.gproduct_name}</h3>
                                <p className="S4M1Card1B2Des"><span className="S4M1Card1B2DiscountPrice">${great.gproduct_price}</span> <span className="S4M1Card1B2Price">${great.gproduct_discount}</span></p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </section>
    <section className="Section5">
        <div className="S5Mainbox1">
            <div className="S5M1b1">
                <div className="S5M1b11">
                    <p className="S5M1b11Description">The New Collections</p>
                    <h3 className="S5M1b11Title">LOOK BOOK</h3>
                    <button className="S5M1b11Btn">THE LOOKBOOK</button>
                </div>
            </div>
            <div className="S5M1b2">
                <h3 className="S5M1b2Title">HURRY!</h3>
                <button className="S5M1b2Description1">NEWSLETTER AND GET DISCOUNT 25% OFF</button>
                <p className="S5M1b2Description2">Sign Up For Newsletter And Get 10% Cash Back Offer</p>
                <input placeholder="Enter Your Email" type="text" className="S5M1b2Input"/><button className="S5M1b2Btn">SUBSCRIBE<FaArrowRight /></button>
            </div>
        </div>
    </section>
    <section className="Section6">
        <div className="S6Mainbox1">
            <TbMinusVertical className="S6M1Icon"/>
            <h2 className="S6M1Title">Latest Blogs</h2>
            <p className="S6M1Description">Way is there to get clothing youre sure<br></br>to love than by making it your know</p>
        </div>
    </section>
    <section className="Section7">
        <div className="S7mainbox1">
            <div className="S7M1B1">
                <img src="https://i.postimg.cc/MT4nLc7k/pic22.webp" alt="Image 1" width="100%" className="S7M1B1Image1"/>
                <div className="S7M1B1Blur1"></div>
                <button className="S7M1B1Btn11">
                    <p className="S7M1B1Btn11Title">ADVENTURE</p>
                    <p className="S7M1B1Btn11Description">I see that the fashion wears out more apparel</p>
                </button>
                <button className="S7M1B1Btn12">
                    <p className="S7M1B1Btn21Title">01 March 2019</p>
                    <p className="S7M1B1Btn22Description">By Alexis Richards</p>
                </button>
            </div>
            <div className="S7M1B2">
                <img src="https://i.postimg.cc/FzLYX9pY/pic21.webp" alt="Image 2" width="100%" className="S7M1B1Image2"/>
                <div className="S7M1B1Blur2"></div>
                <button className="S7M1B1Btn11">
                    <p className="S7M1B1Btn11Title">ADVENTURE</p>
                    <p className="S7M1B1Btn11Description">I see that the fashion wears out more apparel</p>
                </button>
                <button className="S7M1B1Btn12">
                    <p className="S7M1B1Btn21Title">01 March 2019</p>
                    <p className="S7M1B1Btn22Description">By Alexis Richards</p>
                </button>
            </div>
            <div className="S7M1B3">
                <img src="https://i.postimg.cc/9Mz41Pqt/pic20.webp" alt="Image 3" width="100%" className="S7M1B1Image3"/>
                <div className="S7M1B1Blur3"></div>
                <button className="S7M1B1Btn11">
                    <p className="S7M1B1Btn11Title">ADVENTURE</p>
                    <p className="S7M1B1Btn11Description">I see that the fashion wears out more apparel</p>
                </button>
                <button className="S7M1B1Btn12">
                    <p className="S7M1B1Btn21Title">01 March 2019</p>
                    <p className="S7M1B1Btn22Description">By Alexis Richards</p>
                </button>
            </div>
            <div className="S7M1B4">
                <img src="https://i.postimg.cc/3wt4gfWx/pic19.webp" alt="Image 4" width="100%" className="S7M1B1Image4"/>
                <div className="S7M1B1Blur4"></div>
                <button className="S7M1B1Btn11">
                    <p className="S7M1B1Btn11Title">ADVENTURE</p>
                    <p className="S7M1B1Btn11Description">I see that the fashion wears out more apparel</p>
                </button>
                <button className="S7M1B1Btn12">
                    <p className="S7M1B1Btn21Title">01 March 2019</p>
                    <p className="S7M1B1Btn22Description">By Alexis Richards</p>
                </button>
            </div>
        </div>
    </section>
    <section className="Section8">
        <div className="S8Mainbox1">
            <p className="S8M1Para1">We offer a hot deal offer every festival</p>
            <button className="S8M1Para2">DEAL OF THE DAY!</button>
            <div className="S8M1B11">
                <div className="S8M1B11Para1">
                    <h2 className="s8m1b11para11">648</h2>
                    <button className="S8M1B11Btn11">DAYS</button>
                </div>
                <div className="S8M1B11Para1">
                    <h2 className="s8m1b11para11">15</h2>
                    <button className="S8M1B11Btn11">HOURS</button>
                </div>
                <div className="S8M1B11Para1">
                    <h2 className="s8m1b11para11">07</h2>    
                    <button className="S8M1B11Btn11">MINUTES</button>
                </div>
                <div className="S8M1B11Para1">
                    <h2 className="s8m1b11para11">15</h2>
                    <button className="S8M1B11Btn11">SECONDS</button>
                </div>
            </div>
            <button className="S8M1Para3">SHOP COLLECTION</button>
        </div>
    </section>
    <section className="Section9">
        <div className="S9Mainbox1">
            <div className='S9M1B1'>
                <AiOutlineGlobal className="S9M1B1Icon1"/>
                <p className="S9M1B1Title1">FREE STANDARD SHIPPING</p>
            </div>
            <div className='S9M1B1'>
                <CiWallet  className="S9M1B1Icon1"/>
                <p className="S9M1B1Title1">100% MONEY BACK</p>
            </div>
            <div className='S9M1B1'>
                <LiaGiftSolid  className="S9M1B1Icon1"/>
                <p className="S9M1B1Title1">GIFTS FOR MEMBERS</p>
            </div>
            <div className='S9M1B1'>
                <RiSecurePaymentFill  className="S9M1B1Icon1"/>
                <p className="S9M1B1Title1">BUYER PROTECTION</p>
            </div>
        </div>
    </section>
    <section className="Section10">
        <div className="S10Mainbox1">
            <button className="S10M1Btn1"># INSTAGRAM FASHION</button>
            <div className="S10M1B1">
                <div className="S10M1B11"></div>
            </div>
            <div className="S10M1B2">
                <div className="S10M1B12"></div>
            </div>
            <div className="S10M1B3">
                <div className="S10M1B13"></div>
            </div>
            <div className="S10M1B4">
                <div className="S10M1B14"></div>
            </div>
            <div className="S10M1B5">
                <div className="S10M1B15"></div>
            </div>
            <div className="S10M1B6">
                <div className="S10M1B16"></div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default HomePage
