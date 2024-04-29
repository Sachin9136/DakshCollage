import React, { useState, useEffect } from "react";
import { getAllFeedback } from "../api/api_base";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../../img/icon.jpg"

const FeedbackApi = () => {
  const [feedback, setFeedback] = useState([]);

  const getAllFeedbackApi = async () => {
    try {
      const response = await axios.get(getAllFeedback);
      setFeedback(response.data.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };
 
  useEffect(() => {
    getAllFeedbackApi();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  // Function to capitalize the first letter of each word
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Function to format the date to display only month and year
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  // Array of background colors
  const backgroundColors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ccffff", "#ffccff"];

  return (
    <>
    <style>{`
        .icon-img{
          border-radius: 50%;
          width: 100px;
          height: 100px;
        }
      `}</style>
      <div className="slider-container">
        <Slider {...settings}>
          {feedback.map((feedbackItem, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-3">
              <div className="mb-2 p-2">
                <div className="border rounded p-2" style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
                  <div className="d-flex justify-content-center">
                  <img className="icon-img" src={icon} alt=""/>
                  </div>
                  <div className="pt-3">
                    <h4 className="text-center">{capitalizeFirstLetter(feedbackItem.name)}</h4>
                    <p className="text-center">{capitalizeFirstLetter(feedbackItem.suggestion)}</p>
                  </div>
                </div> 
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FeedbackApi;
