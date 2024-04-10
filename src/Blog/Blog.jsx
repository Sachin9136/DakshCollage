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
                        <div className="col-sm-12 col-md-12 col-lg-10">
                        <BlogApi />
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {/* blog posts */}
        </main>
    </div>
  )
}

export default Blog
