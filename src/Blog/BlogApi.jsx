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
        <Link to={`/single_blog/${blog._id}`} key={index}>
          <div className="row justify-content-center">
            <div className="row py-3 d-flex align-items-center flex-row border rounded-3 my-2">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="pattern-bg">
                  <figure className="post-img">
                    <img src={blog.thumbnail} alt="" className="img-fit rounded-3" />
                  </figure>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7 px-3">
                <div className="post-data">
                  <h2 className="m-0">{blog.title}</h2>
                  <p className="p-0 mb-2">{   <div dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 15).join(' ') }}></div>}...
                    <span>
                      <Link to={`/single_blog/${blog._id}`} className="text-primary">
                        Read More
                      </Link>
                  </span>
                  </p> {/* Show only first 20 words */}
                  <ul className="post-meta">
                    <li className="posted-date">
                      <a href="#">
                        <i className="fa fa-calendar-alt" />
                        February 26, 2018
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogApi;
