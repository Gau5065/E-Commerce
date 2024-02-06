import React, { useEffect, useState } from 'react'
import "../CSS/NewAdminPannelC.css"
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Formik } from 'formik';

const NewAdminPannelC = () => {
    const [imgScrollList, setImgScrollList] = useState([]);
    const [addNewScrollModal, setAddNewScrollModal] = useState("none");
    const [editScrollModal, setEditScrollModal] = useState("none");
    const [selectedCarousel, setSelectedCarousel] = useState({});
    var count = 0;

    useEffect(()=>{
      getImgScrollList();
    },[])

    const getImgScrollList = () =>{
      axios.get('http://localhost:8080/scroll/image')
      .then(function (response) {
        setImgScrollList(response.data);
      })
    }

    const addNewScrollImage = () =>{
        setAddNewScrollModal("block")
    }

    const AddNewImageScroll = (a) =>{
      if(a.img_title != "" && a.img_description != "" && a.img_url != ""){
        axios.post("http://localhost:8080/scroll/image", {
          "img_title": a.img_title,
          "img_description": a.img_description,
          "img_url": a.img_url
        })
        .then(function (response) {
            //response Here
            alert("New Image Added Successfully")
            setAddNewScrollModal("none");
            getImgScrollList();
        })
        .catch(function (error) {
            //Error Here
            console.log(error);
        });
      }else{
        alert("Please fill all fields!");
      }
    }

    const deleteImageScroll = (a) =>{
      axios.delete(`http://localhost:8080/scroll/image/${a.scroll_id}`)
      .then(response => {
          // Response Here
        alert("Carousel Deleted Successfully")
        getImgScrollList();
      })
      .catch(error => {
          // Error Here
        console.error(error);
      });
    }


    const editImageModal = (a) =>{
        setEditScrollModal("block")
        setSelectedCarousel(a);
    }

    const EditImageScrollDetails = (a) =>{
      if(a.img_title != "" && a.img_description != "" && a.img_url != ""){
        axios.put(`http://localhost:8080/scroll/image/${selectedCarousel.scroll_id}`, {
          "img_title": a.img_title,
          "img_description": a.img_description,
          "img_url": a.img_url
        })
        .then((response) => {
          //Response Here
          alert("Product Details Updated Successfully")
          setEditScrollModal("none");
          getImgScrollList();
        })
        .catch((error) => {
          //Error Here
          console.error(error);
        });
      }
      
    }


  return (
    <>
    <div className='newAdminCMainbox1'>
        <div className='newAdminCM1Box1'>
            <Link to="/admin/category"><button className='newAdminCM1Box1Btn1'>CATEGORY</button></Link>
            <Link to="/admin/product"><button className='newAdminCM1Box1Btn1'>PRODUCT</button></Link>
            <Link to="/admin/carousel"><button className='newAdminCM1Box1Btn1'>CAROUSEL</button></Link>
        </div>
        <div className='newAdminCM1Box2'>
            <button className='newAdminCM1Box2Btn1' onClick={addNewScrollImage}><FaPlus />&nbsp;ADD NEW CAROUSEL IMAGE</button>
            <table>
              <thead>
                <tr>
                  <th className='newAdminCM1Box2Column1'>SR. NO.</th>
                  <th className='newAdminCM1Box2Column2'>Image</th>
                  <th className='newAdminCM1Box2Column3'>Image Title</th>
                  <th className='newAdminCM1Box2Column4'>Image Description</th>
                  <th className='newAdminCM1Box2Column5'>Edit / Delete</th>
                </tr>
              </thead>
              <tbody>
                  {imgScrollList.map((image, index)=>{
                    count++;
                    return(
                      <tr>
                        <td className='column11'>{count}</td>
                        <td className='column11'><img alt='Image' src={image.img_url} className='Image11'/></td>
                        <td className='column11'>{image.img_title}</td>
                        <td className='column11'>{image.img_description}</td>
                        <td className='column11'><FaRegEdit className='column11Icon1' onClick={()=>editImageModal(image)}/> / <RiDeleteBin6Line className='column11Icon1' onClick={()=>deleteImageScroll(image)}/></td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
        </div>
    </div> 
    {addNewScrollModal == "block" && (
      <>
      <div className='newAdminCMainbox2'>
        <div className='newAdminCM2Box1'>
        <Formik
              initialValues={{ img_title: '', img_description: '', img_url: '' }}
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
              placeholder="Enter Image Title"
              className="adminCM3B1Input1"
              type="text"
              name="img_title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.img_title}
            />
            {errors.img_title && touched.img_title && errors.img_title}
            <input
              placeholder="Enter Image Description"
              className="adminCM3B1Input1"  
              type="text"
              name="img_description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.img_description}
            />
            {errors.img_description && touched.img_description && errors.img_description}
            <input
              placeholder="Enter Image URL"
              className="adminCM3B1Input1"
              type="text"
              name="img_url"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.img_url}
            />
            {errors.img_url && touched.img_url && errors.img_url}<br></br>
            <button type="submit" disabled={isSubmitting} className="adminCM3B1EditBtn1" onClick={()=>AddNewImageScroll(values)}>
              ADD
            </button>
            </form>
            )}
            </Formik>
            <button onClick={()=>setAddNewScrollModal("none")} className="adminCM3B1EditBtn1">CANCEL</button>
        </div>
      </div>
      </>
    )}
    {editScrollModal == "block" && (
      <>
      <div className='newAdminCMainbox3'>
        <div className='newAdminCM3Box1'>
        <Formik
              initialValues={{ img_title: selectedCarousel.img_title, img_description: selectedCarousel.img_description, img_url: selectedCarousel.img_url }}
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
              className="adminCM2B1Input1"
              type="text"
              name="img_title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.img_title}
            />
            {errors.img_title && touched.img_title && errors.img_title}
            <input
              className="adminCM2B1Input1"
              type="text"
              name="img_description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.img_description}
            />
            {errors.img_description && touched.img_description && errors.img_description}
            <input
              className="adminCM2B1Input1"
              type="text"
              name="img_url"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.img_url}
            />
            {errors.img_url && touched.img_url && errors.img_url}<br></br>
            <button type="submit" disabled={isSubmitting} className="adminCM2B1Btn14" onClick={()=>EditImageScrollDetails(values)}>
              EDIT
            </button>
            </form>
            )}
            </Formik>
            <button onClick={()=>setEditScrollModal("none")} className="adminCM2B1Btn14">CANCEL</button>
        </div>
      </div>
      </>
    )}  
    </>
  )
}

export default NewAdminPannelC
