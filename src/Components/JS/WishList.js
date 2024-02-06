import "../CSS/WishList.css"
import NavBar from './NavBar';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoCloseCircle } from "react-icons/io5";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const WishList = () => {

    const [WishProductList, setWishProductList] = useState([]);

    useEffect(()=>{
        updateWishListProduct();
    },[])

    const updateWishListProduct = () =>{
        // Fetching All WishList Products
        axios.get("http://localhost:8080/wishlist/get")
        .then(function (response) {
        setWishProductList(response.data);
        })
    }

    const deleteWishProduct = (a) =>{
        console.log(a);
        axios.delete(`http://localhost:8080/wishlist/delete/${a.wproduct_id}`)
        .then(response => {
            // Response Here
        updateWishListProduct();
        })
        .catch(error => {
            // Error Here
        });
    }

  return (
    <>
    <nav>
    <NavBar/>
    </nav>
    <section className="Section1">
        <div className="wishS1Mianbox1">
            <div className="wishS1M1B1">
                <Link to="/home"><button className="wishS1M1B1HomeBtn1">RETURN TO HOME</button></Link>
                {
                    WishProductList.map((wish, index)=>{
                        return(
                            <div className="wishS1M1B11" key={index + wish}>
                                <button className="wishS1M1B11CloseBtn1" onClick={()=>deleteWishProduct(wish)}><IoCloseCircle /></button>
                                <div className="wishS1M1B11Imgbox1">
                                    <img src={wish.product_imgurl} className="wishS1M1B11Imgbox1Image1"/>
                                </div>
                                <p className="wishS1M1B11Para1">{wish.product_name}</p>
                                <p className="wishS1M1B11Para2">${wish.product_discount}</p>
                            </div>
                        );                        
                    })
                }
            </div>
        </div>
    </section>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default WishList
