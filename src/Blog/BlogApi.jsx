import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../Componanats/api/api_base";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogApi = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  const getBlogApi = async () => {
    try {
      const response = await axios.get(getAllBlogs);
      setBlogs(response.data.data);
    } catch (error) {
      setError(error);
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getBlogApi();
  }, []);

  if (error) { 
    return <div>Error fetching blogs. Please try again later.</div>;
  }

  return (
    <div>
      {blogs.map((blog, index) => (
        <Link to={`/single_blog/${blog._id}`}>
        <div key={index} className="row align-items-center justify-content-center" >
          <div className="row py-3 d-flex flex-row align-items-center">
            <div className="col-md-6">
              <div className="pattern-bg">
                <figure className="post-img">
                  <img src={blog.thumbnail} alt="" className="img-fit" />
                </figure>
              </div>
            </div>
            <div className="col-md-6 px-3">
              <div className="post-data">
                <ul className="post-meta">
                  <li className="posted-date">
                    <a href="#">
                      <i className="fa fa-calendar-alt" />
                      February 26, 2018
                    </a>
                  </li>
                  <li className="post-cat">
                    <a href="#">{blog.title}</a>
                  </li>
                </ul>
                <h2>
                  <a href="blog-detail.html">{blog.title}</a>
                </h2>
                <p>{blog.content}</p>
                <Link to="Single_blog" className="butn1 butn-light">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          {/* <div className='row py-3'>
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
                      <a href="#">{blog.title}</a>
                    </li>
                  </ul>
                  <h2>
                    <a href="blog-detail.html">
                      {blog.title}
                    </a>
                  </h2>
                  <p>
                    {blog.content}
                  </p>
                  <Link to="Single_blog" className="butn1 butn-light">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pattern-bg">
                  <figure className="post-img">
                    <img src={blog.thumbnail} alt="" className="img-fit" />
                  </figure>
                </div>
              </div>
            </div> */}
        </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogApi;
