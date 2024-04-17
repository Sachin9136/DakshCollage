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

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
    <style>{`
        .press-img-size{
          height: 200px;
          object-fit: contain;
        }
      `}</style>
        {press_imgs.map((press_img, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4">
            <div class="rounded d-flex justify-content-center">
              <img className="press-img-size rounded" src={press_img.PressImage} alt=""/>
            </div>
            <h5 className="text-center pt-2">{capitalizeFirstLetter(press_img.title)}</h5>
          </div>
        ))}
    </>
  )
}

export default Press_ReleaseApi
