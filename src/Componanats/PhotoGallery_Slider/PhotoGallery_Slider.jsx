import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllImages } from "../../Componanats/api/api_base";
import "./PhotoGallery_Slider.css";
 
const PhotoGallery_Slider = () => {
  const [images, setImages] = useState([]);

  const getImageApi = async () => {
    try {
      const response = await axios.get(getAllImages);
      setImages(response.data.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    getImageApi();
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

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="col-sm-12 col-md-4 col-lg-3 Slider_img p-1">
            <img className="" src={image.GelleryImage} alt={image.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoGallery_Slider;
