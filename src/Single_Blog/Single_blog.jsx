import React,{useState,useEffect} from "react";
import { getSingleBlog } from "../Componanats/api/api_base";
import { useParams } from "react-router-dom";
import axios from "axios";
const Single_blog = () => {
  const { id } = useParams();
  const [singleblogs, setsingleBlogs] = useState([]);

  const getBlogApi = async () => {
    try {
      const response = await axios.get(`${getSingleBlog}${id}`);
      setsingleBlogs(response.data.data);
    } catch (error) {
      console.log(error); 
    } 
  };

  useEffect(() => {
    getBlogApi();
  }, []);

  return (
    <>
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 py-5 mt-5">
          <div dangerouslySetInnerHTML={{ __html: singleblogs.content }}></div> 
          </div>
        </div>
      </div>
    </div>
    {/* <div>
        <main role="main">
            <section>
                <div className="block inner-pages">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-9">
                        <div className="blog-detail">
                        <div className="featr-thumb">
                            <figure>
                            <img src="assets/images/blog-detail1.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="post-data">
                            <ul className="post-meta">
                            <li className="posted-date">
                                <a href="#">
                                <i className="fa fa-calendar-alt" />
                                February 26, 2018
                                </a>
                            </li>
                            <li className="post-cat">
                                -<a href="#">Personal life</a>
                            </li>
                            </ul>
                            <h2>Helping People Grow Their Careers. Every Day!</h2>
                        </div>
                        <p>
                            Pellentesque ultrices orci id justo vehicula, non aliquam erat
                            lacinia. Mauris rhoncus venenatis tempor. Proin egestas euismod
                            felis a ullamcorper. Nullam lacus nisi, blandit eget lacus ac,
                            lobortis finibus augueSed ut perspiciatis ude omni iste natus
                            error sit voluptatem doloremque laudantium, totam rem aperiam,
                            eaque ipsa qua tore veritatis.
                        </p>
                        <div className="start-learning">
                            <div className="row align-items-center">
                            <div className="col-sm-7 col-md-8">
                                <span>New Course are Launched</span>
                                <h3>Military Engineering Course at General Dhagabadan</h3>
                            </div>
                            <div className="col-sm-5 col-md-4 text-sm-right">
                                <a href="#" className="butn with-bg">
                                Start Learning
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="related-articles align-right">
                            <h4>Related Articles</h4>
                            <ul>
                            <li>
                                <a href="#">Making Cents Investments....</a>
                            </li>
                            <li>
                                <a href="#">Wall Street For Surfing Victirea</a>
                            </li>
                            <li>
                                <a href="#">Your Lead Own Business po...</a>
                            </li>
                            <li>
                                <a href="#">Street For Surfing Victirea</a>
                            </li>
                            </ul>
                        </div>
                        <p>
                            et quasi ut architecto beatae vitae dicta sunt ex mo enim ipsam
                            voluptatem quia valum voluptas.Sed ut perspiciatis ude omni iste
                            natus error sit voluptatem doloremque laudantium, totam rem
                            aperiam, eaque ipsa qua tore veritatis et quasi ut architecto
                            beatae vitae dicta sunt ex mo enim ipsam voluptatem quia valum
                            voluptas.
                        </p>
                        <p>
                            Sed ut perspiciatis ude omni iste natus error sit voluptatem
                            doloremque laudantium, totam rem a enim ipsam voluptatem quia
                            valum voluptas.
                        </p>
                        <p>
                            Pellentesque ultrices orci id justo vehicula, non aliquam erat
                            lacinia. Mauris rhoncus venenatis tempor. Proin egestas euismod
                            felis a ullamcorper. Nullam lacus nisi, blandit eget lacus ac,
                            lobortis finibus augueSed ut perspiciatis ude omni iste natus
                            error sit voluptatem doloremque laudantium, totam rem aperiam,
                            eaque ipsa qua tore veritatis.
                        </p>
                        <div className="wp-block-image">
                            <figure>
                            <img src="assets/images/blog-detail2.jpg" alt="" />
                            </figure>
                        </div>
                        <p>
                            Pellentesque ultrices orci id justo vehicula, non aliquam erat
                            lacinia. Mauris rhoncus venenatis tempor. Proin egestas euismod
                            felis a ullamcorper. Nullam lacus nisi, blandit eget lacus ac,
                            lobortis finibus augueSed ut perspiciatis ude omni iste natus
                            error sit voluptatem doloremque laudantium, totam rem aperiam,
                            eaque ipsa qua tore veritatis.
                        </p>
                        <div className="row img-with-list">
                            <div className="col-md-6">
                            <div className="wp-block-image">
                                <figure>
                                <img src="assets/images/blog-detail3.jpg" alt="" />
                                </figure>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <ul className="list-with-icon">
                                <li>
                                <i className="fa fa-bullhorn" />
                                Pellentesque ultrices orci id justo vehic
                                </li>
                                <li>
                                <i className="fa fa-bullhorn" />
                                ula, non aliquam erat lacinia. Mauris rh
                                </li>
                                <li>
                                <i className="fa fa-bullhorn" />
                                oncus venenatis tempor. Proin egestas
                                </li>
                                <li>
                                <i className="fa fa-bullhorn" />
                                euismod felis a ullamcorper. Nullam lac
                                </li>
                                <li>
                                <i className="fa fa-bullhorn" />
                                us nisi, blandit eget lacus ac, lobortis fin
                                </li>
                                <li>
                                <i className="fa fa-bullhorn" />
                                ibus augueSed ut perspiciatis ude omni
                                </li>
                            </ul>
                            </div>
                        </div>
                        <p>
                            Pellentesque ultrices orci id justo vehicula, non aliquam erat
                            lacinia. Mauris rhoncus venenatis totam rem aperiam, eaque ipsa
                            qua tore veritatis.
                        </p>
                        <div className="tagz">
                            <strong>
                            <i className="fa fa-tag" />
                            Tags:
                            </strong>
                            <a href="#">Fashion</a>
                            <a href="#">Books</a>
                            <a href="#">News</a>
                        </div>
                        <div className="about-author">
                            <div className="author-avatar">
                            <figure>
                                <img src="assets/images/blog-author.jpg" alt="" />
                            </figure>
                            </div>
                            <div className="author-info">
                            <h4>About Author</h4>
                            <p>
                                Pellentesque ultrices orci id justo vehicula, non aliquam
                                erat lacinia Mam rem aperiam, eaque ipsa qua tore veritatis.
                            </p>
                            <ul>
                                <li>
                                <a href="#" className="facebook">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                </li>
                                <li>
                                <a href="#" className="google-plus">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                                </li>
                                <li>
                                <a href="#" className="twitter">
                                    <i className="fab fa-twitter" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="comment-sec">
                            <h4 className="comment-title">02 Comments</h4>
                            <ul className="comment-list">
                            <li>
                                <div className="comment_container">
                                <div className="avatar-img">
                                    <img src="assets/images/avatar.jpg" alt="" />
                                </div>
                                <div className="comment-text">
                                    <p className="meta">
                                    <strong>Jassica Treat</strong>
                                    <time dateTime="2019-03-28T07:22:58+00:00">
                                        March 28, 2019
                                    </time>
                                    </p>
                                    <div className="description">
                                    <p>
                                        Pellentesque ultrices orci id justo vehicula, non
                                        aliquam erat lacinia Mam rem aperiam, eaque ipsa qua
                                        tore veritatis.
                                    </p>
                                    </div>
                                </div>
                                <a href="#" className="reply">
                                    Reply
                                </a>
                                </div>
                                <ul>
                                <li>
                                    <div className="comment_container">
                                    <div className="avatar-img">
                                        <img src="assets/images/avatar2.jpg" alt="" />
                                    </div>
                                    <div className="comment-text">
                                        <p className="meta">
                                        <strong>Willimes Doe</strong>
                                        <time dateTime="2019-03-28T07:22:58+00:00">
                                            March 28, 2019
                                        </time>
                                        </p>
                                        <div className="description">
                                        <p>
                                            Pellentesque ultrices orci id justo vehicula,
                                            non aliquam erat lacinia Mam rem aperiam, eaque
                                            ipsa qua tore veritatis.
                                        </p>
                                        </div>
                                    </div>
                                    <a href="#" className="reply">
                                        Reply
                                    </a>
                                    </div>
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <div className="blog-comment-form">
                            <div className="contact-form">
                            <div id="respond" className="comment-respond">
                                <span id="reply-title" className="comment-reply-title">
                                Leave a Comment{" "}
                                <small>
                                    <a
                                    rel="nofollow"
                                    id="cancel-comment-reply-link"
                                    href="#"
                                    style={{ display: "none" }}
                                    >
                                    Cancel reply
                                    </a>
                                </small>
                                </span>
                                <form
                                method="post"
                                id="commentform"
                                className="comment-form"
                                >
                                <div className="row">
                                    <div className="col-lg-6">
                                    <p className="comment-form-author">
                                        <label htmlFor="author">
                                        <i className="fa fa-user" />
                                        </label>
                                        <input
                                        placeholder="Full Name"
                                        id="author"
                                        name="author"
                                        type="text"
                                        defaultValue=""
                                        required=""
                                        />
                                    </p>
                                    </div>
                                    <div className="col-lg-6">
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
                                    <div className="col-lg-12">
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
                                    <div className="col-lg-12">
                                    <p className="comment-form-comment">
                                        <label htmlFor="comment">
                                        <i className="fa fa-comment-alt" />
                                        </label>
                                        <textarea
                                        placeholder="Review"
                                        id="comment"
                                        name="comment"
                                        cols={45}
                                        rows={4}
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
                    <div className="col-sm-7 col-md-5 col-lg-4 col-xl-3">
                        <aside className="sidebar right">
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Recent News</h4>
                            </div>
                            <ul className="recent-posts">
                            <li>
                                <h4>
                                <a href="#">New Your Focus to Prevent Overanalysis</a>
                                </h4>
                                <a href="#">
                                <i className="fa fa-clock" />
                                March 18,2019
                                </a>
                            </li>
                            <li>
                                <h4>
                                <a href="#">
                                    Three Social Media Hacks for the Busy Entrepreneur
                                </a>
                                </h4>
                                <a href="#">
                                <i className="fa fa-clock" />
                                March 18,2019
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Categories</h4>
                            </div>
                            <ul className="helpful-link">
                            <li>
                                <a href="#">Furnitures</a>
                            </li>
                            <li>
                                <a href="#">Electronics</a>
                            </li>
                            <li>
                                <a href="#">Gaming Consoles</a>
                            </li>
                            <li>
                                <a href="#">Education Courses</a>
                            </li>
                            <li>
                                <a href="#">Books &amp; Magazines</a>
                            </li>
                            <li>
                                <a href="#">Fashion</a>
                            </li>
                            </ul>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Upcoming Events</h4>
                            </div>
                            <ul className="coming-event">
                            <li>
                                <div className="event-date">
                                <div className="date-circle">
                                    <span>
                                    <strong>18</strong>Jun
                                    </span>
                                </div>
                                </div>
                                <div className="event-meta">
                                <h4>
                                    <a href="#">Helping People Grow Their Careers.</a>
                                </h4>
                                </div>
                                <p>
                                <i className="fa fa-map-marker-alt" />
                                street 21, NY, New York
                                </p>
                            </li>
                            <li>
                                <div className="event-date">
                                <div className="date-circle">
                                    <span>
                                    <strong>18</strong>Jun
                                    </span>
                                </div>
                                </div>
                                <div className="event-meta">
                                <h4>
                                    <a href="#">Helping People Grow Their Careers.</a>
                                </h4>
                                </div>
                                <p>
                                <i className="fa fa-map-marker-alt" />
                                street 21, NY, New York
                                </p>
                            </li>
                            <li>
                                <div className="event-date">
                                <div className="date-circle">
                                    <span>
                                    <strong>18</strong>Jun
                                    </span>
                                </div>
                                </div>
                                <div className="event-meta">
                                <h4>
                                    <a href="#">Helping People Grow Their Careers.</a>
                                </h4>
                                </div>
                                <p>
                                <i className="fa fa-map-marker-alt" />
                                street 21, NY, New York
                                </p>
                            </li>
                            </ul>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                            <h4>Archives</h4>
                            </div>
                            <ul className="helpful-link">
                            <li>
                                <a href="#">February, 2018</a>
                            </li>
                            <li>
                                <a href="#">April, 2018</a>
                            </li>
                            <li>
                                <a href="#">May, 2018</a>
                            </li>
                            <li>
                                <a href="#">June, 2018</a>
                            </li>
                            <li>
                                <a href="#">July, 2018</a>
                            </li>
                            <li>
                                <a href="#">December, 2018</a>
                            </li>
                            </ul>
                        </div>
                        <div className="widget black-bg">
                            <div className="newsletter-bg">
                            <h4>Newsletter</h4>
                            <p>Subscribe Our Newsletter and Get Updates.</p>
                            <form>
                                <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    required="required"
                                    placeholder="Subscribe Email"
                                />
                                </div>
                                <button type="submit" className="btn">
                                Subscribe Now
                                </button>
                            </form>
                            </div>
                        </div>
                        </aside>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
    </div> */}
    </>
  )
}

export default Single_blog
