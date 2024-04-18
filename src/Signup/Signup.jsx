import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { signupApi } from '../Redux-toolkit/Slice/FormSlice';
import "./Signup.css";
import {Link} from "react-router-dom";


const Signup = () => {

    const dispatch = useDispatch();
    // const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [stander, setStander] = useState("");
    const [password, setPassword] = useState("");
    const handlesubmit = (e) => {
        e.preventDefault()
        // const data = new FormData()
        // data.append("name",name)
        // data.append("email",email)
        // data.append("phone",phone)
        // data.append("dob",dob)
        const data = {
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            stander: stander,
            password: password,
            // image :image
        }
        // console.log(data)
        dispatch(signupApi(data))
        setName("")
        setEmail("")
        setPhone("")
        setDob("")
        setStander("")
        setPassword("")
    }

  return (
    <div>
        <section class="">
            <div class="container">
                <div className="row">
                    <div className="col-12">
                       
                    </div>
                </div>
                <div class="row signup-form-bg mb-5 mt-5">
                    <div class="col-sm-12 col-md-6 col-lg-6 rounded d-flex align-items-center justify-content-center">
                        <div class="login-card py-3">
                            <h2 class="text-center font-dark pb-3">Welcome</h2>
                            <h5 class="font-dark pb-4 text-center ">"If you already have an account, please proceed to log in."</h5>
                            <div class="text-center">
                                <Link to="/login" class="sign-in-btn">LOG IN</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 dark-bg rounded form-bg-color">
                        <div class="signup-card">
                            <div>
                                <h1 className='text-center text-white pt-5'>Registration Form</h1>
                            </div>
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
                                    <p className="omment-form-subject d-flex justify-content-center">
                                        <label htmlFor="subject">
                                        </label>
                                        <input 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Type Your Name"
                                        className="form-control feild"
                                        id="name"
                                        name="name"
                                        type="text"
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Type Your Email"
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
                                        <label htmlFor="subject">
                                        </label>
                                        {/* <input
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        placeholder="Date of Birth"
                                        className="form-control feild"
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        defaultValue=""
                                        required=""
                                        /> */}
                                        <input
                                        onChange={(e) => setDob(e.target.value)}
                                        className="form-control feild justify-content-start"
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={dob}
                                        ></input>
                                    </p>
                                    </div>
                                    <div className="col-sm-12">
                                    <p className="omment-form-subject d-flex justify-content-center">
                                        <label htmlFor="subject">
                                        </label>
                                        <input
                                        value={stander}
                                        onChange={(e) => setStander(e.target.value)}
                                        placeholder="Stander"
                                        className="form-control feild"
                                        id="stander"
                                        name="stander"
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
                                        placeholder="Set Password"
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
                                <div className="col-12 d-flex justify-content-center">
                                <p className="form-submit text-center">
                                    <button type="submit" className="submit signup-btn">
                                        Send Message
                                    </button>
                                </p>
                                </div>
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

export default Signup
