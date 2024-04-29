import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../api/api_base";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // Function to truncate content to the first 18 words
  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }
    return content;
  };

  // Function to format the date to display only date, month, and year
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="row">
        <style>
            {`.blog-images{
                width: 100%;
                height: 250px;
                object-fit: cover;
                }
            `}
        </style>
        <div className="slider-container">
        <Slider {...settings}>
      {blogs.map((blog, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Link to={`/single_blog/${blog._id}`} className="d-block">
            <div className="border m-2 p-2 rounded">
              <img src={blog.thumbnail} className="blog-images img-fluid rounded" alt="" />
              <div className="p-3">
                <h5 className="mb-3">
                  <div dangerouslySetInnerHTML={{ __html: truncateContent(blog.title) }}></div>
                  <div dangerouslySetInnerHTML={{ __html: truncateContent(blog.content) }}></div>
                </h5>
                <p>
                  <Link to={`/single_blog/${blog._id}`} className="text-primary">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      </Slider>
      </div>
    </div>
  );
};

export default BlogApi;
