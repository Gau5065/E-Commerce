import React, { useEffect, useState } from 'react'
import "../CSS/AdminPannel.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Formik } from 'formik';
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const AdminPannel = () => {
    const [CategoryList, setCategoryList] = useState([]);
    const [AddNewCategory, setAddNewCategory] = useState("none");
    const [EditCategory, setEditCategory] = useState("none");
    const [SelectedCategory, setSelectedCategory] = useState({})

    useEffect(()=>{
        getAllCategoryList();
    },[])

    const getAllCategoryList = () =>{
        axios.get('http://localhost:8080/category/get')
        .then(function (response) {
            // Response Here
        setCategoryList(response.data);
        })
    }

    const getCategoryDetails = (a) =>{
        setSelectedCategory(a);
        setEditCategory("block")
    }

    const submitCategory = (a) =>{
        var count1 = 0;
        if(a.category != ""){
            CategoryList.map((category, index)=>{
                if(a.category.toLowerCase() === category.category_name.toLowerCase()){
                    count1++;
                }
            })
            if(count1 > 0){
                alert(a.category+" Category is Already Exist")
            }else{
                axios.post("http://localhost:8080/category/add", {
                    "category_name":a.category
                })
                .then(function (response) {
                    // Response Here
                alert("New Category Added Successfully");
                getAllCategoryList();
                setAddNewCategory("none");
                })
                .catch(function (error) {
                    // Error Here
                });
            }
        }else{
            alert("Please Enter the Field");
        }
    }

    const deleteCategory = () =>{
        axios.delete(`http://localhost:8080/category/delete/${SelectedCategory.category_id}`)
        .then(response => {
            // Response Here
        alert("Category Name Deleted Successfully");
        getAllCategoryList();
        setEditCategory("none");
        })
        .catch(error => {
            // Error Here
        });
    }

    const editCategory = (a) =>{
        var count1 = 0;
        if(a.category != ""){
            CategoryList.map((category, index)=>{
                if(a.category.toLowerCase() == category.category_name.toLowerCase){
                    count1++;
                }
            })
            if(count1 > 0){
                alert(a.category+" Category Is Already Exist")
            }else{   
                axios.put(`http://localhost:8080/category/edit/${SelectedCategory.category_id}`, {
                    "category_name": a.category
                })
                .then((response) => {
                    // Response Here
                alert("Category Name Updated Successfully");
                getAllCategoryList();
                setEditCategory("none");
                })
                .catch((error) => {
                    // Error Here
                });
            }
        }else{
            alert("Please Enter the Field");
        }
    }

  return (
    <>
    <div className="adminMainbox1">
        <div className="adminM1B1">
            <Link to="/admin/category"><button className="adminM1B1Btn11 adminM1B1Btn11Selected">CATEGORY</button></Link>
            <Link to="/admin/product"><button className="adminM1B1Btn11">PRODUCT</button></Link>
            <Link to="/admin/carousel"><button className="adminM1B1Btn11">CAROUSEL</button></Link>
        </div>
        <div className="adminM1B2">
            <div className="adminM1B2Box1">
                {
                    CategoryList.map((category, index)=>{
                        return(
                            <p key={index + category}><button className="adminM1B2Box1Btn1" onClick={()=>getCategoryDetails(category)}>{category.category_name.toUpperCase()}</button></p>
                        );
                    })
                }
            </div>
            <div className="adminM1B2Box2">
                <button onClick={()=>setAddNewCategory("block")} className="adminM1B2Box2AddNewBtn1"><FaPlus />&nbsp;Add New Category</button>
                {AddNewCategory == "block" && (
                <>
                <Formik
                    initialValues={{ category: ''}}
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
                className="adminM1B2Box2Input1"
                    type="text"
                    name="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                /><br></br>
                {errors.category && touched.category && errors.category}
                <button type="submit" disabled={isSubmitting} onClick={()=>submitCategory(values)} className="adminM1B2Box2Btn1">
                  ADD
                </button>
                </form>
                )}
                </Formik>
                <button onClick={()=>setAddNewCategory("none")} className="adminM1B2Box2Btn2">CANCEL</button>
                </>
                )}
            </div>
        </div>
    </div>
    {EditCategory == "block" && (
        <>
        <div className="adminMainbox2">
        <div className="adminM2B1">
        <button className="adminM2B1Btn1" onClick={()=>setEditCategory("none")}><IoClose /></button>
            <Formik
            initialValues={{ category: SelectedCategory.category_name}}
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
            className="adminM2B1Input1"
                type="text"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
            /><br></br>
            {errors.category && touched.category && errors.category}
            <button type="submit" disabled={isSubmitting} onClick={()=>editCategory(values)} className="adminM2B1Btn11">
              EDIT
            </button>
            </form>
            )}
            </Formik>
            <button onClick={deleteCategory} className="adminM2B1Btn11">DELETE</button>
        </div>
        </div>
        </>
    )}  
    </>
  )
}

export default AdminPannel
