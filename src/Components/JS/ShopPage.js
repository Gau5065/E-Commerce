import React, { useEffect, useState } from 'react'
import "../CSS/ShopPage.css"
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios';
import { CiHeart, CiShoppingCart } from "react-icons/ci";

const ShopPage = () => {

    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterProductList, setFilterProductList] = useState([]);
    const recordsPerPage = 9;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filterProductList.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filterProductList.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    const [CartProductList, setCartProductList] = useState([]);
    const [WishProductList, setWishProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=>{
        getProductList();

        updateCartProductList();

        updateWishlistProductList();

        getCategoryList();
    }, [])

    const getCategoryList = () =>{
        axios.get("http://localhost:8080/category/get")
            .then(function (response) {
            setCategoryList(response.data);
        })
    }

    const getProductList = () =>{
        axios.get("http://localhost:8080/product/get")
            .then(function (response) {
            setProductList(response.data);
            setFilterProductList(response.data);
        })
    }

    function nextPage() {
        if(currentPage !== npage){
          setCurrentPage(currentPage + 1);
        }
    }
  
    function prePage() {
      if(currentPage !== 1){
        setCurrentPage(currentPage - 1);
      }
    }
  
    function changePage(id) {
        setCurrentPage(id);
    }

    const getProductDetails = (a) =>{
        window.location = "/product/selected/"+a.product_id;
    }

    const updateCartProductList = () =>{
        // Fetching Cart Products
        axios.get("http://localhost:8080/cart/get")
            .then(function (response) {
            setCartProductList(response.data);
        })
    }

    const addProductToCart = (e) =>{
        var count1 = 0;
        CartProductList.map((cart, index)=>{
            if(e.product_id == cart.product_id){
                count1++;
            }
        })

        if(count1 > 0){
            alert("Product Added To Cart");
            CartProductList.map((cart, index)=>{
                if(e.product_id == cart.product_id){
                    var pq = cart.product_quantity + 1;
                    axios.put("http://localhost:8080/cart/edit/"+cart.cproduct_id, {
                        "product_id": e.product_id,
                        "product_name": e.product_name,
                        "product_description": e.product_description,
                        "product_price": e.product_price,
                        "product_discount": e.product_discount,
                        "product_category": e.product_category,
                        "product_imgurl": e.product_imgurl,
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
                "product_id": e.product_id,
                "product_name": e.product_name,
                "product_description": e.product_description,
                "product_price": e.product_price,
                "product_discount": e.product_discount,
                "product_category": e.product_category,
                "product_imgurl": e.product_imgurl,
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

    const updateWishlistProductList = () =>{
        // Fetching Cart Products
        axios.get("http://localhost:8080/wishlist/get")
            .then(function (response) {
            setWishProductList(response.data);
        })
    }

    const addProductToWish = (e) =>{
        var count1 = 0;
        WishProductList.map((wish, index)=>{
            if(e.product_id == wish.product_id){
                count1++;
            }
        })

        if(count1 > 0){
            alert("This product is already in your wishlist");
        }else{
            alert("Product Added To Your WishList")
            axios.post("http://localhost:8080/wishlist/add", {
                "product_id": e.product_id,
                "product_name": e.product_name,
                "product_description": e.product_description,
                "product_price": e.product_price,
                "product_discount": e.product_discount,
                "product_category": e.product_category,
                "product_imgurl": e.product_imgurl
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

    const selectCategory = (a) =>{
        setFilterProductList([]);
        const filteredProducts = productList.filter((product) => {
            return a.category_id === product.product_category;
        });
        setFilterProductList(filteredProducts);
    }

    const selectCategoryAll = () =>{
        const filteredProducts = productList.filter((product) => {
            return product;
        });
        setFilterProductList(filteredProducts);
    }

  return (
    <>
    <nav>
    <NavBar/>
    </nav>
    <section className="shopSection1">
        <div className="shopS1Mainbox1">
            <div className="shopS1M1B1">
                <button className="shopS1M1B1Para1">WE PROVIDE LATEST FASHION TRENDS</button>
                <h2 className="shopS1M1B1Para2">Shop Classic</h2>
            </div>
        </div>
    </section>
    <section className="shopSection2">
        <div className="shopS2Mainbox1">
            <div className="shopS2M1B1">
                <div className="shopS2M1B11">
                    <div className="shopS2M1B11Box1">
                        <h5>CATEGORIES</h5>
                        <button className="shopS2M1B11Box1CatBtn1" onClick={selectCategoryAll}>ALL</button>
                        {
                            categoryList.map((category, index)=>{
                                return(
                                    <button key={index + category} className="shopS2M1B11Box1CatBtn1" onClick={()=>selectCategory(category)}>{category.category_name}</button>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="shopS2M1B12">
                    {
                        records.map((product, index)=>{
                            var DP = Math.floor(((product.product_price - product.product_discount) / product.product_price) * 100);
                            return(
                                <div className="shopS2M1B12ProCard1" key={index + product}>
                                    <button className="shopS2M1B12ProCard1DisBtn1">-{DP}%</button>
                                    <div className="shopS2M1B12ProCard1Img1">
                                        <img alt="Image" className="shopS2M1B12ProCard1Img11" src={product.product_imgurl}/>
                                        <div className="shopS2M1B12ProCard1Img198">
                                            <button className="shopS2M1B12ProCard1Img1HeartBtn1" onClick={()=>addProductToWish(product)}><CiHeart /></button>
                                            <button className="shopS2M1B12ProCard1Img1CartBtn1" onClick={()=>addProductToCart(product)}><CiShoppingCart /></button>
                                        </div>
                                    </div>
                                    <h5 className="shopS2M1B12ProCard1Head1" onClick={()=>getProductDetails(product)}>{product.product_name}</h5>
                                    <p className="shopS2M1B12ProCard1Head1"><span className="shopS2M1B12ProCard1Para1">${product.product_price}</span> <span className="shopS2M1B12ProCard1Para2">${product.product_discount}</span></p>
                                </div>
                            );
                        })
                    }
                     <nav className="pageCenter11 demo11">
                    <ul className="pagination">
                        <li className="page-item">
                            <a href="#" className="page-link" onClick={prePage} id="previousPage">previous</a></li>
                            {
                                numbers.map((n, i)=>(
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a href="#" className="page-link demo11" onClick={()=>changePage(n)}>{n}</a></li>))
                            }
                            <li className="page-item">
                            <a href="#" className="page-link" onClick={nextPage} id="nextPage">Next</a></li>
                    </ul>
                </nav>
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

export default ShopPage
