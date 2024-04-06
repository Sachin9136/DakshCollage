import React, { useState, useEffect } from "react";
import { getAllPressImg } from "../Componanats/api/api_base";
import axios from "axios";

const Press_ReleaseApi = () => {
  const [press_imgs, setPress_img] = useState([]);

  const getPress_imgApi = async () => {
    try {
      const response = await axios.get(getAllPressImg);
      setPress_img(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getPress_imgApi();
  }, []);

  return (
    <>
        {press_imgs.map((press_img, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-4">
              <div class="gallery-meta">
                <img className="rounded-3 p-2" src={press_img.PressImage} alt="" width="100%"/>
                <h3 className="text-center">{press_img.title}</h3>
                <a data-fancybox="gallery" href="assets/images/gallery-image-1.jpg" class="icn"><i class="fa fa-search"></i></a>
              </div>
            </div>
        ))};
    </>
  )
}

export default Press_ReleaseApi
