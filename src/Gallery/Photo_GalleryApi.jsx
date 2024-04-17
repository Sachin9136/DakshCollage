import React, { useState, useEffect } from "react";
import { getAllImages } from "../Componanats/api/api_base";
import axios from "axios";

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

  return (
    <>
    <style>{`
        .gallery-img-size{
          // width: 100px;
          height: 300px;
          object-fit: contain;
        }
      `}</style>
        {images.map((image, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 pb-5">
            <div class="rounded d-flex justify-content-center">
              <img className="gallery-img-size" src={image.GelleryImage} alt=""/>
            </div>
            <h5 className="text-center pt-2">{capitalizeFirstLetter(image.title)}</h5>
          </div>
        ))}
    </>
  )
}

export default Photo_GalleryApi;
