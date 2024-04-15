import React, { useState, useEffect } from "react";
import { getAllToppers } from "../api/api_base";
import axios from "axios";
import "./Toppers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ToppersApi = () => {
  const [topper, setTopper] = useState([]);

  const getAllToppersApi = async () => {
    try {
      const response = await axios.get(getAllToppers);
      setTopper(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
 
  useEffect(() => {
    getAllToppersApi();
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
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <>
    <div className="slider-container">
      <Slider {...settings}>
      {topper.map((toppers, index) => (
        <div key={index} className="col-6 col-md-4 col-lg-3 px-2 ">
            <div className="students border rounded">
                <figure className="topper-images">
                    <img src={toppers.Image} alt="" />
                </figure>
                <h2>
                    <a href="#">{toppers.Name}</a>
                </h2>
                <h5>{toppers.Batch} <span> ({toppers.marks})</span></h5>
                <span dangerouslySetInnerHTML={{ __html: toppers.content }}></span>
                <p>{toppers.year}</p>
            </div>
        </div>
      ))}
      </Slider>
    </div>
    </>
  )
}

export default ToppersApi;
