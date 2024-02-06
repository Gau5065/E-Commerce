import React, { useEffect, useState } from 'react'
import "../CSS/LoginPage.css"
import { Formik } from 'formik';
import axios from 'axios';

const LoginPage = () => {
    const [userList, setUserList] = useState({});

    useEffect(()=>{

        getUserList();

    },[])

    const getUserList = () =>{
        axios.get("http://localhost:8080/user/register")
            .then(function (response) {
            setUserList(response.data);
        })
    }

    const checkUser = (a) =>{
        var count1 = 0;
        var count2 = 0;
        userList.map((user, index)=>{
            if(a.email.toLowerCase() == user.email.toLowerCase() && a.password == user.user_password){
                count1++;
            }else if(a.email.toLowerCase() == "admin@gmail.com" && a.password == "admin"){
                count2++;
            }
        })

        if(count1 > 0){
            window.location = "/home";
        }else if(count2 >0){
            window.location = "/admin"
        }else{
            alert("please check email or password");
        }
    }
  return (
    <>
    <div className="loginMainbox1">
        <div className="loginM1B1">
            <h4>USER LOGIN</h4>
            <Formik
              initialValues={{ email: 'gaurav@gmail.com', password: 'Gaurav@321' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
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
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    className="loginM1B1Input1"
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    placeholder="Enter Your Password"
                    className="loginM1B1Input1"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting} onClick={()=>checkUser(values)} className="loginM1B1Btn1">
                    LOGIN
                  </button>
                </form>
              )}
            </Formik>
        </div>
    </div>
    </>
  )
}

export default LoginPage
