import React, { useEffect, useState } from 'react'
import "../CSS/AdminPannelCarousel.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import { Formik } from 'formik';
import { FaPlus } from "react-icons/fa6";




const AdminPannelCarousel = () => {
  const [CarouselList, setCarouselList] = useState([]);
  const [EditModal, setEditModal] = useState("none");
  const [AddModal, setAddModal] = useState("none");
  const [SelectedCarousel, setSelectedCarousel] = useState({});

  useEffect(()=>{
    getCarouselList();
  }, [])

  const getCarouselList = () =>{
    axios.get('http://localhost:8080/scroll/image')
    .then(function (response) {
        //Response Here
      setCarouselList(response.data);
    })
  }

  const getCarouselDetails = (a) =>{
    setSelectedCarousel(a);
    setEditModal("block");
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
            setAddModal("none");
            getCarouselList();
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
      getCarouselList();
    })
    .catch(error => {
        // Error Here
      console.error(error);
    });
  }

  const EditImageScrollDetails = (a) =>{
      if(a.img_title != "" && a.img_description != "" && a.img_url != ""){
        axios.put(`http://localhost:8080/scroll/image/${SelectedCarousel.scroll_id}`, {
          "img_title": a.img_title,
          "img_description": a.img_description,
          "img_url": a.img_url
        })
        .then((response) => {
          //Response Here
          alert("Product Details Updated Successfully")
          setEditModal("none");
          getCarouselList();
        })
        .catch((error) => {
          //Error Here
          console.error(error);
        });
      }
      
  }
  return (
    <>
     <div className="adminCMainbox1">
        <div className="adminCM1B1">
            <Link to="/admin/category"><button className="adminCM1B1Btn11">CATEGORY</button></Link>
            <Link to="/admin/product"><button className="adminCM1B1Btn11">PRODUCT</button></Link>
            <Link to="/admin/carousel"><button className="adminCM1B1Btn11 adminCM1B1Btn11Selected">CAROUSEL</button></Link>
        </div>
        <div className="adminCM1B2">
            <div className="adminCM1B2Box1">
                {
                  CarouselList.map((caro, index)=>{
                    return(
                      <div className="adminCM1B2Box1Img1" key={index+caro}>
                        <button className="adminCM1B2Box1Img1Btn1" onClick={()=>deleteImageScroll(caro)}><IoClose /></button>
                        <img src={caro.img_url} alt="Image Here" className="adminCM1B2Box1Img11" onClick={()=>getCarouselDetails(caro)}/>
                      </div>
                    );
                  })
                }
            </div>
        </div>
        <button className="AddNewImgScrollBtn1" onClick={()=>setAddModal("block")}><FaPlus />&nbsp;ADD NEW</button>
    </div>
    {EditModal == "block" && (
      <>
        <div className="adminCMainbox2">
          <div className="adminCM2B1">
            <Formik
              initialValues={{ img_title: SelectedCarousel.img_title, img_description: SelectedCarousel.img_description, img_url: SelectedCarousel.img_url }}
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
            <button onClick={()=>setEditModal("none")} className="adminCM2B1Btn14">CANCEL</button>
          </div>
        </div>
      </>
    )}
    {AddModal == "block" && (
      <>
      <div className="adminCMainbox3">
        <div className="adminCM3B1">
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
            <button onClick={()=>setAddModal("none")} className="adminCM3B1EditBtn1">CANCEL</button>
        </div>
      </div>
      </>
    )}
    </>
  )
}

export default AdminPannelCarousel
