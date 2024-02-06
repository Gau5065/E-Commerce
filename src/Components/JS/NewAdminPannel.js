import React, { useEffect, useState } from 'react'
import "../CSS/NewAdminPannel.css"
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Formik } from 'formik';




const NewAdminPannel = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [addCategoryModal, setAddCategoryModal] = useState("none")
    const [editCategoryModal, setEditCategoryModal] = useState("none")
    const [selectedCategory, setSelectedCategory] = useState([]);
    var count = 0;

    useEffect(()=>{
        getCategoryList();
    }, [])

    const getCategoryList = () =>{
        axios.get('http://localhost:8080/category/get')
          .then(function (response) {
            setCategoryList(response.data);
        })
    }

    const addNewCategory = () =>{
        setAddCategoryModal("block");
    }

    const submitCategory = (a) =>{
        var count1 = 0;
        if(a.category != ""){
            categoryList.map((category, index)=>{
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
                getCategoryList();
                setAddCategoryModal("none");
                })
                .catch(function (error) {
                    // Error Here
                });
            }
        }else{
            alert("Please Enter the Field");
        }
    }

    const deleteCategory = (a) =>{
        axios.delete(`http://localhost:8080/category/delete/${a.category_id}`)
        .then(response => {
            // Response Here
        alert("Category Name Deleted Successfully");
        getCategoryList();
        })
        .catch(error => {
            // Error Here
        });
    }

    const editCategoryData = (a) =>{
        setSelectedCategory([]);
        setEditCategoryModal("block")
        setSelectedCategory(a);
    }


    const editCategory = (a) =>{
        var count1 = 0;
        if(a.category != ""){
            categoryList.map((category, index)=>{
                if(a.category.toLowerCase() == category.category_name.toLowerCase){
                    count1++;
                }
            })
            if(count1 > 0){
                alert(a.category+" Category Is Already Exist")
            }else{   
                axios.put(`http://localhost:8080/category/edit/${selectedCategory.category_id}`, {
                    "category_name": a.category
                })
                .then((response) => {
                    // Response Here
                alert("Category Name Updated Successfully");
                getCategoryList();
                setEditCategoryModal("none");
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
    <div className='newAdminMainbox1'>
        <div className='newAdminM1Box1'>
            <Link to="/admin/category"><button className='newAdminM1Box1Btn1'>CATEGORY</button></Link>
            <Link to="/admin/product"><button className='newAdminM1Box1Btn1'>PRODUCT</button></Link>
            <Link to="/admin/carousel"><button className='newAdminM1Box1Btn1'>CAROUSEL</button></Link>
        </div>
        <div className='newAdminM1Box2'>
            <button className='newAdminM1Box2Btn1' onClick={addNewCategory}><FaPlus />&nbsp;ADD NEW CATEGORY</button>
            <table className='categoryTable1'>
                <thead>
                    <tr>
                        <th className='categoryColumn1'>SR. No</th>
                        <th className='categoryColumn2'>Category Name</th>
                        <th className='categoryColumn3'>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryList.map((category, index)=>{
                        count++;
                        return(
                            <tr key={index + category}>
                                <td className='tbodyColumn1'>{count}</td>
                                <td className='tbodyColumn1'>{category.category_name}</td>
                                <td className='tbodyColumn1'><FaRegEdit className='EDBtn1' onClick={()=>editCategoryData(category)}/> / <RiDeleteBin6Line className='EDBtn1' onClick={()=>deleteCategory(category)}/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
    {addCategoryModal == "block" && (
        <>
        <div className='newAdminMainbox2'>
        <div className='newAdminM2Box1'>
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
                <button className='adminM1B2Box2Btn1' onClick={()=>setAddCategoryModal("none")}>CANCEL</button>
            </div>
        </div>
        </>
    )}
    {editCategoryModal == "block" && (
        <>
        <div className='newAdminMainbox3'>
            <div className='newAdminM3Box1'>
            <Formik
            initialValues={{ category: selectedCategory.category_name}}
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
            <button onClick={()=>setEditCategoryModal("none")} className="adminM2B1Btn11">CANCEL</button>
            </div>
        </div>
        </>
    )}
    </>
  )
}

export default NewAdminPannel
