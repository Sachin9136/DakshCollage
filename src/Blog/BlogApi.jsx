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

  // Function to format the date to display only date, month, and year
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Function to capitalize the first letter of each word in a string
  const capitalizeFirstLetter = (string) => {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div>
      {blogs.map((blog, index) => (
        <Link to={`/single_blog/${blog._id}`} key={index}>
          <div className="row justify-content-center">
            <div className="row py-3 d-flex align-items-center flex-row border rounded-3 my-2">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="pattern-bg">
                  <figure className="post-img">
                    <img src={blog.thumbnail} alt="" className=" rounded-3"/>
                  </figure>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7 px-3">
                <div className="post-data">
                  <h2 className="m-0">{capitalizeFirstLetter(blog.title)}</h2>
                  {<p dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 15).join(' ') }}>
                    </p>}
                   {/* Show only first 20 words */}
                  <ul className="post-meta d-flex justify-content-between">
                    <li className="posted-date">
                      <a href="#">
                        <i className="fa fa-calendar-alt" />
                        {formatDate(blog.createdAt)}
                      </a>
                    </li>
                    <li>
                      <span>
                        <Link to={`/single_blog/${blog._id}`} className="text-primary">
                          Read More
                        </Link>
                      </span>
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
