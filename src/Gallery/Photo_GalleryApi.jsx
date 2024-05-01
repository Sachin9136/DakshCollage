import React, { useState, useEffect } from "react";
import { getAllImages } from "../Componanats/api/api_base";
import axios from "axios";
import "./Photo_Gallery.css";

const Photo_GalleryApi = () => {
  const [images, setImages] = useState([]);

  const getImageApi = async () => {
    try {
      const response = await axios.get(getAllImages);
      setImages(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getImageApi();
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
  };

  return (
    <>
    <style>{`
        .gallery-img-size{
          width: 100%;
          height: 300px;
          object-fit: contain;
        }
      `}</style>
        {images.map((image, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 pb-5">
            <div className="rounded d-flex justify-content-center image-container">
              <img className="gallery-img-size rounded" src={image.GelleryImage} alt="Avatar" />
              <div className="middle">
                <div className="image_title">{capitalizeFirstLetter(image.title)}</div>
                <div className="image_title">{formatDate(image.createdAt)}</div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Photo_GalleryApi;
