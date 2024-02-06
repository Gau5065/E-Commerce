import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../CSS/CartList.css"
import NavBar from './NavBar'
import Footer from './Footer'
import { IoCloseCircleSharp } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";



const CartList = () => {
    const [CartProduct, setCartProduct] = useState([]);
    const [sb, setsb] = useState(0);
    var sub = 0;

    useEffect(()=>{

        calculateSubTotal();

        updateCartProduct();

    }, [])

    const updateCartProduct = () =>{
        axios.get('http://localhost:8080/cart/get')
        .then(function (response) {
            // Response Here
        setCartProduct(response.data);
        })
    }

    const deleteCartProduct = (a) =>{
        axios.delete(`http://localhost:8080/cart/delete/${a.cproduct_id}`)
        .then(response => {
            // Response Here
            updateCartProduct();
        })
        .catch(error => {
            // Error Here
        });
    }

    const calculateSubTotal = () =>{
        CartProduct.map((cart, index)=>{
            sub += cart.product_quantity * cart.product_price;
        })
        setsb(sub);
    }

  return (
    <>
    <nav>
        <NavBar/>
    </nav>
    <section className="CartSection1">
        <div className="cartS1Mainbox1">
            <div className="cartS1M1B1">
                {
                    CartProduct.map((cart, index)=>{
                        return(
                            <div className="cartS1M1B11" key={index + cart}>
                                <div className="cartS1M1B11Box1">
                                    <IoCloseCircleSharp  onClick={()=>deleteCartProduct(cart)} className="cartS1M1B11Box1CloseBtn1"/>
                                </div>
                                <div className="cartS1M1B11Box2">
                                    <img alt="Image1" src={cart.product_imgurl} className="cartS1M1B11Box2Img1"/>
                                </div>
                                <div className="cartS1M1B11Box3">
                                    <p>{cart.product_name}</p>
                                </div>
                                <div className="cartS1M1B11Box4">
                                    <p>${cart.product_discount}</p>
                                </div>
                                <div className="cartS1M1B11Box5">
                                    <p>{cart.product_quantity}</p>
                                </div>
                                <div className="cartS1M1B11Box6">
                                    <p>${(cart.product_price) * (cart.product_quantity)}</p>
                                </div>
                            </div>
                        );
                    })
                }
                <button className="cartS1M1B1SubBtn1">SUBTOTAL <PiDotsNineBold />${sb}</button>
            </div>
        </div>
    </section>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default CartList
