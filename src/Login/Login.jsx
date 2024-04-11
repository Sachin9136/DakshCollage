import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { loginApi } from '../Redux-toolkit/Slice/FormSlice';
import "./Login.css";
import {Link} from "react-router-dom";


const Login = () => {

    const dispatch = useDispatch();
    // const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState("");
    const handlesubmit = (e) => {
        e.preventDefault()
        // const data = new FormData()
        // data.append("name",name)
        // data.append("email",email)
        // data.append("phone",phone)
        // data.append("dob",dob)
        const data = {
            password: password,
            email: email,
            phone: phone,
            // image :image
        }
        // console.log(data)
        dispatch(loginApi(data))
        setPassword("")
        setEmail("")
        setPhone("")
    }

    console.log(localStorage.getItem("accessToken"))

  return (
    <div>
        <section class="">
            <div class="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center py-5'>Login Form</h1>
                    </div>
                </div>
                <div class="row signup-form-bg mb-5">
                    <div class="col-sm-12 col-md-6 col-lg-6 rounded d-flex align-items-center justify-content-center">
                        <div class="login-card py-3">
                            <h2 class="text-center font-dark pb-3">Welcome</h2>
                            <h5 class="font-dark pb-4 text-center ">"If you Don't have Account, please proceed to Sign Up in."</h5>
                            <div class="text-center">
                                <Link to="/signup" class="sign-in-btn">SIGN UP</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 dark-bg rounded form-bg-color">
                        <div class="signup-card">
                            <div class="py-5">
                                <form
                                    method="post"
                                    onSubmit={handlesubmit}
                                    className="comment-form contact__form ">
                                    <div
                                        className="alert alert-success contact__msg"
                                        style={{ display: "none" }}
                                        role="alert"
                                    >
                                        Your message was sent successfully.
                                    </div>
                                    <div className="row">
                                    
                                    <div className="col-sm-12">
                                    <p className="omment-form-subject d-flex justify-content-center d-flex justify-content-center">
                                        <label htmlFor="subject">
                                        </label>
                                        <input 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Type Your Email or Phone"
                                        className="form-control feild"
                                        id="email"
                                        name="email"
                                        type="email"
                                        defaultValue=""
                                        required=""
                                        />
                                    </p>
                                    </div>
                                    <div className="col-sm-12">
                                    <p className="omment-form-subject d-flex justify-content-center">
                                        <label htmlFor="subject">
                                        </label>
                                        <input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="phone"
                                        className="form-control feild"
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        defaultValue=""
                                        required=""
                                        />
                                    </p>
                                    </div>
                                    <div className="col-sm-12">
                                    <p className="omment-form-subject d-flex justify-content-center">
                                        <label htmlFor="password">
                                        </label>
                                        <input 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Type Your Password"
                                        className="form-control feild"
                                        id="password"
                                        name="password"
                                        type="text"
                                        defaultValue=""
                                        required=""
                                        />
                                    </p>
                                    </div>
                                </div>
                                <p className="form-submit text-center">
                                    <button type="submit" className="submit signup-btn">
                                        Send Message
                                    </button>
                                </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login
