import "../CSS/NavBar.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";



const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [WishlistProduct, setWishlistProduct] = useState([]);
    const [WishlistProductBadge, setWishlistProductBadge] = useState();
    const [CartProduct, setCartProduct] = useState([]);
    const [CartProductBadge, setCartProductBadge] = useState();
    const [sb, setsb] = useState(0);
    let lastScroll = 0;
    var sub = 0;

    useEffect(()=>{
         // Getting WisList ProductList
         axios.get("http://localhost:8080/wishlist/get")
         .then(function (response) {
           setWishlistProduct(response.data);
           setWishlistProductBadge(response.data.length);
         })
 
         //Getting Cart ProductList
         axios.get("http://localhost:8080/cart/get")
         .then(function (response) {
           setCartProduct(response.data);
           setCartProductBadge(response.data.length)
         })

         ProductBadge();

         calculateSubTotal();
    })

    const ProductBadge = () =>{
        setCartProductBadge(CartProduct.length);
        setWishlistProductBadge(WishlistProduct.length);
    }

    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll);
        return () =>{
            window.removeEventListener("scroll", listenToScroll);
        }
    }, [])
    
    const listenToScroll = () => {
        const currentScroll = window.scrollY;
            if (currentScroll > 100 && lastScroll <= currentScroll) {
                setIsVisible(false);
            } else {
            setIsVisible(true);
            }
        lastScroll = currentScroll;
        const Nav1Mainbox1 = document.getElementsByClassName("Nav1Mainbox1")[0];
        if(Nav1Mainbox1){
            if(currentScroll < 100){
                Nav1Mainbox1.style.background = "none";
            }else{
                Nav1Mainbox1.style.backgroundColor = "white";
            }
        }
    };

    const calculateSubTotal = () =>{
        CartProduct.map((cart, index)=>{
            sub += cart.product_quantity * cart.product_price;
        })
        setsb(sub);
    }

    const openCartBox = () =>{
        var CartMainbox1Id = document.getElementById("CartMainbox1Id");
        if(CartMainbox1Id.style.display == "none"){
            CartMainbox1Id.style.display = "block";
        }else{
            CartMainbox1Id.style.display = "none";
        }
    }

    const deleteCartProduct = (a) =>{
        axios.delete(`http://localhost:8080/cart/delete/${a.cproduct_id}`)
        .then(response => {
            // Response Here
        })
        .catch(error => {
            // Error Here
        });
    }
  return (
    <>
    {isVisible == true && (
        <>
        <nav>
        <div className="Nav1Mainbox1">
        <div className="N1M1B1"></div>
        <div className="N1M1B2">
            <ul className="N1M1B2List1">
                <li className="N1M1B2List1Li1">Home</li>
                <li className="N1M1B2List1Li2">Shop</li>
                <li className="N1M1B2List1Li3">Safe</li>
                <li className="N1M1B2List1Li4">Pages</li>
                <li className="N1M1B2List1Li5">Blog</li>
                <li className="N1M1B2List1Li6">Elements</li>
                <li className="N1M1B2List1Li7">Features</li>
            </ul>
        </div>
        <div className="N1M1B3">
            <ul className="N1M1B3List1">
                <li className="N1M1B3List1Li1"><FaBars /></li>
                <li className="N1M1B3List1Li2"><CiSearch /></li>
                <li className="N1M1B3List1Li3"><CiUser /></li>
                <Link to="/wishlist"><li className="N1M1B3List1Li4"><CiHeart /><button className="HeartBadge1">{WishlistProductBadge}</button></li></Link>
                <Link><li className="N1M1B3List1Li5" onClick={openCartBox}><CiShoppingCart /><button className="HeartBadge2">{CartProductBadge}</button></li></Link>
            </ul>
        </div>
        </div>
        </nav>
        <div className="CartMainbox1" id="CartMainbox1Id">
            <div className="C1M1B1CartList">
                {
                    CartProduct.map((cart, index)=>{
                        return(
                            <div className="C1M1B1" key={index + cart}>
                                <button className="C1M1B1Closebtn1" onClick={()=>deleteCartProduct(cart)}><FaWindowClose /></button>
                            <div className="C1M1B1Imgbox1">
                                <img src={cart.product_imgurl} alt="Image" className="C1M1B1Imgbox1Img1"/>
                            </div>
                                <h6 className="C1M1B1Title">{cart.product_name}</h6>
                                <p className="C1M1B1Price">{cart.product_quantity} x ${cart.product_price}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="C1M1B2">
                <div className="C1M1B21">
                    <h6>SUBTOTAL</h6>
                    <h6>${sb}</h6>
                </div>
            <div className="C1M1B22">
                <Link to="/cartlist"><button className="C1M1B22Btn1">VIEW CART</button></Link>
                <button className="C1M1B22Btn2">CHECKOUT</button>
                <p className="C1M1B22Para1">FREE SHIPPING ON ALL ORDERS OVER $75</p>
            </div>
            </div>
        </div> 
        </>
    )}
    </>
  )
}

export default NavBar
