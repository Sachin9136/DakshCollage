import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from '../Redux-toolkit/Slice/FormSlice';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
    const { status } = useSelector((state) => state.form);
    const dispatch = useDispatch();
    const history = useNavigate()
    // const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    const handlesubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(loginApi({ email, password })).then((result) => {
                if (result.payload) {
                    history("/")
                    setEmail("");
                    setPassword("");
                    window.location.reload(false)

                }
            });
        } catch (error) {
            alert(error + error)
        }
    }


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
                        <div class="col-sm-12 col-md-6 col-lg-6 dark-bg rounded form-bg-color d-flex align-items-center">
                            {/* <div class="signup-card"> */}
                                <div class="py-5">
                                    <form
                                        // method="post"
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
                                                        required
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="Type Your Email or Phone"
                                                        className="form-control feild"
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        defaultValue=""
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
                                                        required
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-center">
                                        <div className="form-submit d-grid d-flex justify-content-center">
                                            <button className="submit signup-btn" type="submit">
                                                {status === "loading" ? (
                                                    <div className="spinner-border spinner-border-sm" style={{ color: "#1976D2" }} role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                ) : (
                                                    "Login"
                                                )}
                                            </button>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
