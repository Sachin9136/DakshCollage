import React, { useState, useEffect } from "react";
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

  // Function to format the date to display only year or month
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Get year and month
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' }); // Full month name
    // return `${year}`; // Return only year
    return `${month} ${year}`; // Return month and year
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="row py-5 d-flex justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-7">
              <div>
                <img className="rounded" src={singleblogs.thumbnail} alt="" width="100%" />
              </div>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-10 py-5 mt-5">
              <h1 dangerouslySetInnerHTML={{ __html: singleblogs.title }}></h1>
              <div dangerouslySetInnerHTML={{ __html: singleblogs.content }}></div>
              <div>{formatDate(singleblogs.createdAt)}</div> {/* Display formatted date */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Single_blog;
