import React, { useEffect, useState } from 'react'
import "../CSS/NewAdminPannelP.css"
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Formik } from 'formik';
import { ProductSchema } from '../ValidationSchema/ProductValidation';


const NewAdminPannelP = () => {
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [addNewProductModal, setAddNewProductModal] = useState("none");
  const [editProductModal, setEditProductModal] = useState("none");
  const [selectedProduct, setSelectedProduct] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = productList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(productList.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  var count = 0;

  useEffect(()=>{
    getProductList();

    getCategoryList();
  })

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


  const getProductList = () =>{
    axios.get("http://localhost:8080/product/get")
    .then(function (response) {
        // Response Here
      setProductList(response.data);
    })
  }

  const getCategoryList = () =>{
    axios.get("http://localhost:8080/category/get")
    .then(function (response) {
        // Response Here
      setCategoryList(response.data);
    })
  }

  const AddNewProduct = (a) =>{
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
        setAddNewProductModal("none");
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

  const getProductDetails = (a) =>{
      setEditProductModal("block");
      setSelectedProduct(a);
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
          setEditProductModal("none");
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
    <div className='newAdminPMainbox1'>
        <div className='newAdminPM1Box1'>
            <Link to="/admin/category"><button className='newAdminPM1Box1Btn1'>CATEGORY</button></Link>
            <Link to="/admin/product"><button className='newAdminPM1Box1Btn1'>PRODUCT</button></Link>
            <Link to="/admin/carousel"><button className='newAdminPM1Box1Btn1'>CAROUSEL</button></Link>
        </div>
        <div className='newAdminPM1Box2'>
          <button className='newAdminPM1Box2Btn1' onClick={()=>setAddNewProductModal("block")}><FaPlus />&nbsp;ADD NEW PRODUCT</button>
            <table>
              <thead>
                <tr>
                  {/* <th className='newAdminPM1Box2Table1Column1'>NO.</th> */}
                  <th className='newAdminPM1Box2Table1Column2'>Product Image</th>
                  <th className='newAdminPM1Box2Table1Column3'>Product Name</th>
                  <th className='newAdminPM1Box2Table1Column4'>Product Description</th>
                  <th className='newAdminPM1Box2Table1Column5'>Category</th>
                  <th className='newAdminPM1Box2Table1Column6'>MRP</th>
                  <th className='newAdminPM1Box2Table1Column7'>Discount</th>
                  <th className='newAdminPM1Box2Table1Column8'>Edit / Delete</th>
                </tr>
              </thead>
              <tbody>
                {records.map((product, index)=>{
                  count++;
                    return(
                      <tr key={index + product}>
                        {/* <td className='column11'>{count}</td> */}
                        <td className='column11'><img alt='image' src={product.product_imgurl} className='Image11'/></td>
                        <td className='column11'>{product.product_name}</td>
                        <td className='column11'>{product.product_description}</td>
                        <td className='column11'>
                        {
                          categoryList.map((category, index)=>{
                            if(category.category_id == product.product_category){
                              return category.category_name;
                            }
                          })
                        }
                        </td>
                        <td className='column11'>{product.product_price}</td>
                        <td className='column11'>{product.product_discount}</td>
                        <td className='column11'><FaRegEdit className='newAdminPM1Box2Icon1' onClick={()=>getProductDetails(product)}/> / <RiDeleteBin6Line className='newAdminPM1Box2Icon1' onClick={()=>deleteProduct(product)}/></td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
            <nav className="custom-pagination" id="pagination1">
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prePage} id="previousPage">Previous</a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a href="#" className="page-link custom-link" onClick={() => changePage(n)}>{n}</a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={nextPage} id="nextPage">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    {addNewProductModal == "block" && (
      <>
      <div className='newAdminPMainbox2'>
        <div className='newAdminPM2Box1'>
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
            <button className="AddProductModalBox1Btn1" onClick={()=>setAddNewProductModal("none")}>CANCEL</button>
        </div>
      </div>
      </>
    )} 
    {editProductModal == "block" && (
      <>
      <div className='newAdminPMainbox3'>
          <div className='newAdminPM3Box1'>
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
              <button className="AddProductModalBox1Btn1" onClick={()=>setEditProductModal("none")}>CANCEL</button>
          </div>
      </div>
      </>
    )}
    </>
  )
}

export default NewAdminPannelP
