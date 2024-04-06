import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { createformApi } from '../Redux-toolkit/Slice/FormSlice';

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
                                        <img src="assets/images/success-man2.png" alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-8">
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
                                                    {/* <div className="col-sm-12">
                                                        <p className="comment-form-subject">
                                                            <label htmlFor="subject">
                                                                <i className="fa fa-pencil-alt" />
                                                            </label>
                                                            <input
                                                                placeholder="image"
                                                                id="image"
                                                                name="image"
                                                                // value={image}
                                                                onChange={(e) => setImage(e.target.files[0])}
                                                                type="file"
                                                                defaultValue=""
                                                                required=""
                                                            />
                                                        </p>
                                                    </div> */}
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
            {/* contact form */}
            <section>
                <div className="block no-gap overlap-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="socials-contact facebook-box">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <a className="social-icn facebook" href="#">
                                                <i className="fab fa-facebook-f" />
                                                <div className="social-meta">
                                                    <span>Follow Me On</span>
                                                    <h4>Facebook</h4>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-4 text-md-right">
                                            <a className="follow-us" href="#">
                                                Follow Us <i className="fa fa-long-arrow-alt-right" />
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        ellentesque ultrices orci id justo vehicula, non aliq lorime ups
                                        uilimes jami usanasdlerat lacininatis tempor.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="socials-contact twitter-box">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <a className="social-icn twitter" href="#">
                                                <i className="fab fa-twitter" />
                                                <div className="social-meta">
                                                    <span>Follow Me On</span>
                                                    <h4>Twitter</h4>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-4 text-md-right">
                                            <a className="follow-us" href="#">
                                                Follow Us <i className="fa fa-long-arrow-alt-right" />
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        ellentesque ultrices orci id justo vehicula, non aliq lorime ups
                                        uilimes jami usanasdlerat lacininatis tempor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact info */}
            <section>
                <div className="block no-gap">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="g-map">
                                <div id="map" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
