import "../CSS/GreatProductPage.css"
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const GreatProductPage = () => {
  useEffect(()=>{
    getGreatProductList();

    getSelectedGreatProduct();
  })
  const { id } = useParams();
  const [GreatProductList, setGreatProductList] = useState([]);
  const [SelectedGreatProduct, setSelectedGreatProduct] = useState({});

  

  const getGreatProductList = () =>{
    axios.get("http://localhost:8080/great/get")
    .then(function (response) {
      // Response Here
    setGreatProductList(response.data);
    })
  }

  const getSelectedGreatProduct = () =>{
      GreatProductList.map((great, index)=>{
        if(id == great.gproduct_id){
          setSelectedGreatProduct(great);
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
                <img src={SelectedGreatProduct.gproduct_imgurl} className="SPS1M1B11Image1"/>
              </div>
              <div className="SPS1M1B12">
                  <h3 className="SPS1M1B12Para1">{SelectedGreatProduct.gproduct_name}</h3>
                  <p className="SPS1M1B12Para2">${SelectedGreatProduct.gproduct_discount}</p>
                  <p className="SPS1M1B12Para3">{SelectedGreatProduct.gproduct_description}</p>
                  <button className="SPS1M1B12Btn1">ADD TO CART</button>
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

export default GreatProductPage
