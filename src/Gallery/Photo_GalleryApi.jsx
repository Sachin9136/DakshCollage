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

  return (
    <>
        {images.map((image, index) => (
          <div key={index} className="col-sm-12 col-md-4 col-lg-4">
            <div class="gallery-meta rounded">
              <img className=" p-2" src={image.GelleryImage} alt="" width="100%"/>
              <h5 className="text-center">{image.title}</h5>
              <a data-fancybox="gallery" href="assets/images/gallery-image-1.jpg" class="icn"><i class="fa fa-search"></i></a>
            </div>
          </div>
        ))};
    </>
  );
}

export default Photo_GalleryApi;
