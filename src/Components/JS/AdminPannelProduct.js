import React, { useEffect, useState } from 'react'
import "../CSS/AdminPannelProduct.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FaPlus } from "react-icons/fa6";
import { Formik } from 'formik';
import { ProductSchema } from '../ValidationSchema/ProductValidation';
import { IoClose } from "react-icons/io5";



const AdminPannelProduct = () => {

  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [addModal, setAddModal] = useState("none");
  const [editModal, setEditModal] =useState("none");
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = productList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(productList.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(()=>{

    getProductList();

    getCategoryList();

  },[])

  const getProductList = () =>{
    axios.get("http://localhost:8080/product/get")
    .then(function (response) {
        // Response Here
      setProductList(response.data);
    })
  }

  const getCategoryList = () => {
    axios.get("http://localhost:8080/category/get")
    .then(function (response) {
        // Response Here
      setCategoryList(response.data);
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

  const AddNewProduct = (a) =>{
    // console.log(a);
    if(a.product_name != "" && a.product_description != "" && a.product_price != "" && a.product_discount != "" && a.product_category != "" && a.product_imgurl != ""){
      axios.post("http://localhost:8080/product/add", {
        "product_name": a.product_name,
        "product_description": a.product_description,
        "product_price": a.product_price,
        "product_discount": a.product_discount,
        "product_category": a.product_category,
        "product_imgurl": a.product_imgurl
      })
      .then(function (response) {
          // Response Here
        alert("New Product Added Successfully")
        setAddModal("none");
        getProductList();
      })
      .catch(function (error) {
          // Error Here
        console.log(error);
      });
    }else{
      alert('Please fill out all fields');
    }
  }

  const deleteProduct = (a) =>{
    axios.delete(`http://localhost:8080/product/delete/${a.product_id}`)
    .then(response => {
        // Response Here
    alert("Product Deleted Successfully")
    getProductList();
    })
    .catch(error => {
        // Error Here
    console.error(error);
    });
  }

  const editProductDetails = (a) =>{
     setSelectedProduct(a);
     setEditModal("block");
  }

  const EditProductById = (a) =>{
    if(a.product_name != "" && a.product_description != "" && a.product_price != "" && a.product_discount != "" && a.product_category != "" && a.product_imgurl != ""){
      axios.put(`http://localhost:8080/product/edit/${selectedProduct.product_id}`, {
          "product_name": a.product_name,
          "product_description": a.product_description,
          "product_price": a.product_price,
          "product_discount": a.product_discount,
          "product_category": a.product_category,
          "product_imgurl": a.product_imgurl
        })
        .then((response) => {
          //Response Here
          alert("Product Details Updated Successfully")
          setEditModal("none");
          getProductList();
        })
        .catch((error) => {
          //Error Here
          console.error(error);
        });
    }else{
      alert('Please fill out all fields');
    }
  }

  return (
    <>
    <div className="adminPMainbox1">
        <div className="adminPM1B1">
            <Link to="/admin/category"><button className="adminPM1B1Btn11">CATEGORY</button></Link>
            <Link to="/admin/product"><button className="adminPM1B1Btn11 adminPM1B1Btn11Selected">PRODUCT</button></Link>
            <Link to="/admin/carousel"><button className="adminPM1B1Btn11">CAROUSEL</button></Link>
        </div>
        <div className="adminPM1B2">
            <div className="adminPM1B2Mainbox1">
                {records.map((product, index)=>{
                  return(
                    <div className="adminPM1B2M1B1" key={index + product}>
                      <button className="adminPM1B2M1B1CloseBtn1" onClick={()=>deleteProduct(product)}><IoClose /></button>
                      <div className="adminPM1B2M1B1Image">
                        <img alt="Image" src={product.product_imgurl} className="adminPM1B2M1B1ImageTag" onClick={()=>editProductDetails(product)}/>
                      </div>
                      <h5 className="adminPM1B2M1B1Para1">{product.product_name}</h5>
                      <p className="adminPM1B2M1B1Para2"><span className="adminPM1B2M1B1Para21">${product.product_price}</span> <span className="adminPM1B2M1B1Para22">${product.product_discount}</span></p>
                    </div>
                  );
                })}
            </div>
            <nav className="pageCenter">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" onClick={prePage} id="previousPage">previous</a></li>
                  {
                    numbers.map((n, i)=>(
                      <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                        <a href="#" className="page-link demo11" onClick={()=>changePage(n)}>{n}</a>
                      </li>
                    ))
                  }
                 <li className="page-item">
                  <a href="#" className="page-link" onClick={nextPage} id="nextPage">Next</a></li>
              </ul>
            </nav>
            <button className="addNewProduct" onClick={()=>setAddModal("block")}><FaPlus />&nbsp;ADD NEW</button>
        </div>
    </div>
    {addModal === "block" && (
      <>
        <div className="AddProductModal">
          <div className="AddProductModalBox1">
          <Formik
           initialValues={{ product_name: '', product_description: '', product_price: '', product_discount: '', product_category:'', product_imgurl:'' }}
           validationSchema={ProductSchema}
              onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
               setSubmitting(false);
             }, 400);
             }}
             >
              {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              }) => (
             <form onSubmit={handleSubmit}>
               <input
               className="AddProductModalBox1Inp1"
                placeholder="Enter Product Name"
                 type="text"
                 name="product_name"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.product_name}
               />
               {errors.product_name && touched.product_name && errors.product_name}
               <input
               className="AddProductModalBox1Inp1"
               placeholder="Enter Product Description"
                 type="text"
                 name="product_description"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.product_description}
               />
               {errors.product_description && touched.product_description && errors.product_description}
               <input
               className="AddProductModalBox1Inp1"
               placeholder="Enter Product Price"
                 type="number"
                 name="product_price"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.product_price}
               />
               {errors.product_price && touched.product_price && errors.product_price}
               <input
               className="AddProductModalBox1Inp1"
               placeholder="Enter Product Discounted Price"
                 type="number"
                 name="product_discount"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.product_discount}
               />
               {errors.product_discount && touched.product_discount && errors.product_discount}
               <input
               className="AddProductModalBox1Inp1"
               placeholder="Enter Product Image URL"
                 type="text"
                 name="product_imgurl"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.product_imgurl}
               />
               {errors.product_imgurl && touched.product_imgurl && errors.product_imgurl}
               <select
                className="AddProduct-Select"
                name="product_category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.product_category}
                >
                <option value="0">--Select Category--</option>
                {categoryList.map((category, index) => {
                return (
                  <option value={category.category_id} key={index + category} className="AddProduct-Option">
                    {category.category_name}
                  </option>
                );
                })}
                </select>
               <button type="submit" disabled={isSubmitting} className="AddProductModalBox1Btn1" onClick={()=>AddNewProduct(values)}>
                 ADD
               </button>
             </form>
            )}
            </Formik>
            <button className="AddProductModalBox1Btn1" onClick={()=>setAddModal("none")}>CANCEL</button>
          </div>
        </div>
          </>
        )}
        {editModal === "block" && (
          <>
          <div className="EditProductModal">
              <div className="EditProductModalBox1">
              <Formik
                initialValues={{ product_name: selectedProduct.product_name, product_description: selectedProduct.product_description, product_price: selectedProduct.product_price, product_discount: selectedProduct.product_discount, product_category: selectedProduct.product_category, product_imgurl: selectedProduct.product_imgurl }}
                validationSchema={ProductSchema}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                 setSubmitting(false);
               }, 400);
               }}
               >
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                }) => (
               <form onSubmit={handleSubmit}>
                 <input
                 className="AddProductModalBox1Inp1"
                  placeholder="Enter Product Name"
                   type="text"
                   name="product_name"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.product_name}
                 />
                 {errors.product_name && touched.product_name && errors.product_name}
                 <input
                 className="AddProductModalBox1Inp1"
                 placeholder="Enter Product Description"
                   type="text"
                   name="product_description"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.product_description}
                 />
                 {errors.product_description && touched.product_description && errors.product_description}
                 <input
                 className="AddProductModalBox1Inp1"
                 placeholder="Enter Product Price"
                   type="number"
                   name="product_price"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.product_price}
                 />
                 {errors.product_price && touched.product_price && errors.product_price}
                 <input
                 className="AddProductModalBox1Inp1"
                 placeholder="Enter Product Discounted Price"
                   type="number"
                   name="product_discount"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.product_discount}
                 />
                 {errors.product_discount && touched.product_discount && errors.product_discount}
                 <input
                 className="AddProductModalBox1Inp1"
                 placeholder="Enter Product Image URL"
                   type="text"
                   name="product_imgurl"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.product_imgurl}
                 />
                 {errors.product_imgurl && touched.product_imgurl && errors.product_imgurl}
                 <select
                  className="AddProduct-Select"
                  name="product_category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.product_category}
                  >
                  <option value="0">--Select Category--</option>
                  {categoryList.map((category, index) => {
                  return (
                    <option value={category.category_id} key={index + category} className="AddProduct-Option">
                      {category.category_name}
                    </option>
                  );
                  })}
                  </select>
                 <button type="submit" disabled={isSubmitting} className="AddProductModalBox1Btn1" onClick={()=>EditProductById(values)}>
                   EDIT
                 </button>
               </form>
              )}
              </Formik>
              <button className="AddProductModalBox1Btn1" onClick={()=>setEditModal("none")}>CANCEL</button>
              </div>
          </div>
          </>
        )}
    </>
  )
}

export default AdminPannelProduct
