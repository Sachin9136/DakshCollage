import React from 'react';
import BlogApi from "./BlogApi";
import {Link} from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
        <main role="main">
            <section className='blog-bg d-flex align-items-center justify-content-center'>
                <div className="">
                    <h1 className='text-white'>Our Blog</h1>
                </div>
            </section>
            {/* Banner */}
            <section>
                <div className="block inner-pages">
                <div className="container">
                    <div className="row justify-content-center">
                        <BlogApi />
                        <div className="col-sm-12">
                            <div className="post-container">
                                <div className="row align-items-center contnt-left">
                                    <div className="col-md-6">
                                    <div className="pattern-bg">
                                        <figure className="post-img">
                                        <img src="assets/images/post-img1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
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
                                        <h2>
                                        <a href="blog-detail.html">
                                            Amazing Red’ PS4 Pro for Spider-Man’s launch
                                        </a>
                                        </h2>
                                        <p>
                                        Pellentesque ultrices orci id justo vehicula, non aliquam
                                        erat lacinia. Mauris rhoncus venenatis tempor. Proin
                                        egestas euismod felis a ullamcorper. Nullam lacus nisi,
                                        blandit eget lacus ac, lobortis finibus augue.
                                        </p>
                                        <Link to="Single_blog" className="butn1 butn-light">
                                        Read More
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    <ul className="paginationz top-margin-70">
                        <li className="prev">
                            <a href="#" title="">
                            <i className="fa fa fa-caret-left" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                            1
                            </a>
                        </li>
                        <li>
                            <a className="active" href="#" title="">
                            2
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                            3
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                            4
                            </a>
                        </li>
                        <li className="space">.......</li>
                        <li>
                            <a href="#" title="">
                            13
                            </a>
                        </li>
                        <li className="next">
                            <a href="#" title="">
                            <i className="fa fa fa-caret-right" />
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </section>
            {/* blog posts */}
        </main>
    </div>
  )
}

export default Blog
