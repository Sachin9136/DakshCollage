import React, { useState, useEffect } from "react";
import { getAllVideos } from "../Componanats/api/api_base";
import axios from "axios";
import { Link } from "react-router-dom";

const Videos_GalleryApi = () => {
  const [videos, setVideos] = useState([]);

  const getVideoApi = async () => {
    try {
      const response = await axios.get(getAllVideos);
      setVideos(response.data.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    getVideoApi();
  }, []);

  // Function to extract video ID from YouTube URL
  const extractVideoId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match && match[1];
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


  return (
    <>
      {videos.map((video, index) => (
        <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-5">
          {video.Url.includes("youtube.com") ? (
            <iframe
            className="rounded"
            width="100%"
            height="300px"
              title={video.title}
              src={`https://www.youtube.com/embed/${extractVideoId(video.Url)}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <p>This is not a YouTube video.</p>
          )}
          <h4>{capitalizeFirstLetter(video.title)}</h4>
        </div>
      ))}
    </>
  );
};

export default Videos_GalleryApi;
