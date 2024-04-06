import React, { useState, useEffect } from "react";
import { getAllVideos } from "../Componanats/api/api_base";
import axios from "axios";

const Videos_GalleryApi = () => {
  const [videos, setVideos] = useState([]);

  const getVideoApi = async () => {
    try {
      const response = await axios.get(getAllVideos);
      setVideos(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getVideoApi();
  }, []);

  return (
    <>
        {videos.map((video, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-4">
                <div className="gallery-meta">
                <img src={video.thumbnail} alt="" />
                <h3>{video.title}</h3>
                </div>
            </div>
        ))};
    </>
  )
}

export default Videos_GalleryApi
