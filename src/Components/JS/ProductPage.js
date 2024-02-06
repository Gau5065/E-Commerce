import React from 'react'
import "../CSS/ProductPage.css"
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { useEffect, useState } from 'react'
import Footer from './Footer';
import axios from 'axios';

const ProductPage = () => {

    const { id } = useParams();
    const [productList, setProductList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(()=>{
        getProductList();
    
        getSelectedProduct();
    })

    const getProductList = () =>{
        axios.get("http://localhost:8080/product/get")
        .then(function (response) {
          // Response Here
        setProductList(response.data);
        })
      }
    
      const getSelectedProduct = () =>{
          productList.map((product, index)=>{
            if(id == product.product_id){
              setSelectedProduct(product);
            }
          })
      }

  return (
    <>
    <nav>
        <NavBar/>
    </nav>
    <section className="SPSection1">
        <div className="SPS1Mainbox1">
          <div className="SPS1M1B1">
              <div className="SPS1M1B11">
                <img src={selectedProduct.product_imgurl} className="SPS1M1B11Image1"/>
              </div>
              <div className="SPS1M1B12">
                  <h3 className="SPS1M1B12Para1">{selectedProduct.product_name}</h3>
                  <p className="SPS1M1B12Para2">${selectedProduct.product_discount}</p>
                  <p className="SPS1M1B12Para3">{selectedProduct.product_description}</p>
                  <button className="SPS1M1B12Btn1">ADD TO CART</button>
              </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default ProductPage
