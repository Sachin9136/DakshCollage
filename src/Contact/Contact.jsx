import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { createformApi } from '../Redux-toolkit/Slice/FormSlice';
import men_img from "../img/contact-bg-img.png";
import "./Contact.css";

const Contact = () => {
    const dispatch = useDispatch();
    // const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [resaon, setResaon] = useState("");
    const handlesubmit = (e) => {
        e.preventDefault()
        // const data = new FormData()
        // data.append("name",name)
        // data.append("email",email)
        // data.append("phone",phone)
        // data.append("resaon",resaon)
        const data = {
            name: name,
            email: email,
            phone: phone,
            resaon: resaon,
            // image :image
        }
        // console.log(data)
        dispatch(createformApi(data))
        setName("")
        setEmail("")
        setPhone("")
        setResaon("")
    }
    return (
        <div>
            {/* Banner */}
            <section>
                <div className="block no-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="contact-us">
                                    <div className="help-man">
                                        <img src={men_img} alt="" width="80%"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-8 Z_index">
                                            <h2>Please let me know if you Have any Questions?</h2>
                                            <form
                                                    
                                                method="post"
                                                onSubmit={handlesubmit}
                                                className="comment-form contact__form"
                                            >
                                                <div
                                                    className="alert alert-success contact__msg"
                                                    style={{ display: "none" }}
                                                    role="alert"
                                                >
                                                    Your message was sent successfully.
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="comment-form-author">
                                                            <label htmlFor="author">
                                                                <i className="fa fa-user" />
                                                            </label>
                                                            <input
                                                                placeholder="Full Name"
                                                                id="author"
                                                                name="name"
                                                                value={name}
                                                                className="form-control"
                                                                onChange={(e) => setName(e.target.value)}
                                                                type="text"
                                                                defaultValue=""
                                                                required=""
                                                            />
                                                        </p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="comment-form-email">
                                                            <label htmlFor="email">
                                                                <i className="fa fa-envelope-open" />
                                                            </label>
                                                            <input
                                                                placeholder="Email Adress "
                                                                id="email"
                                                                className="form-control"
                                                                name="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                type="email"
                                                                defaultValue=""
                                                                required=""
                                                            />
                                                        </p>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <p className="comment-form-subject">
                                                            <label htmlFor="subject">
                                                                <i className="fa fa-pencil-alt" />
                                                            </label>
                                                            <input
                                                                placeholder="phone"
                                                                id="phone"
                                                                className="form-control"
                                                                name="phone"
                                                                value={phone}
                                                                onChange={(e) => setPhone(e.target.value)}
                                                                type="tel"
                                                                defaultValue=""
                                                                required=""
                                                            />
                                                        </p>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <p className="comment-form-comment">
                                                            <label htmlFor="comment">
                                                                <i className="fa fa-comment-alt" />
                                                            </label>
                                                            <textarea
                                                            className="form-control"
                                                                placeholder="Reason"
                                                                id="comment"
                                                                name="resaon"
                                                                value={resaon}
                                                                onChange={(e) => setResaon(e.target.value)}
                                                                cols={45}
                                                                rows={5}
                                                                required=""
                                                                defaultValue={""}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="form-submit">
                                                    <button type="submit" className="btn btn-primary">
                                                        Send Message
                                                    </button>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
