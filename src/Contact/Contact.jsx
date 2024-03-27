import React from 'react';

const Contact = () => {
  return (
    <div>
        <main role="main">
            {/* <section>
                <div className="sub-head">
                <div
                    className="bg-image"
                    style={{ backgroundImage: "url(assets/images/slide1-1.jpg)" }}
                />
                <div className="sub-meta">
                    <h1>Contact Us</h1>
                    <ul className="pager">
                    <li>
                        <a href="#" title="">
                        Home
                        </a>
                    </li>
                    <li>Contact Us</li>
                    </ul>
                </div>
                </div>
            </section> */}
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
                                action="https://html.webinane.com/koula/mail.php"
                                id="commentform"
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
                                        placeholder="Email Adress"
                                        id="email"
                                        name="email"
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
                                        placeholder="Subject"
                                        id="subject"
                                        name="subject"
                                        type="text"
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
                                        placeholder="Message"
                                        id="comment"
                                        name="message"
                                        cols={45}
                                        rows={5}
                                        required=""
                                        defaultValue={""}
                                    />
                                    </p>
                                </div>
                                </div>
                                <p className="form-submit">
                                <button type="submit" className="submit butn1 butn-bg">
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
            {/* map section */}
            <section>
                <div className="block no-gap scheme-bg">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="contact-info">
                        <i className="flaticon-pin" />
                        <div className="info-meta">
                            <h2>Postal Address</h2>
                            <p>PO Box 16122 Collins Street West Victoria</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-info">
                        <i className="flaticon-circular" />
                        <div className="info-meta">
                            <h2>Envato HQ</h2>
                            <p>121 King Street, Melbourne Victoria 3000</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-info">
                        <i className="flaticon-tool" />
                        <div className="info-meta">
                            <h2>Business Phones</h2>
                            <p>+61 3 8376 6284, +61 3 8376 2648</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* contact info */}
        </main>
    </div>
  )
}

export default Contact
