import React, { useState, useEffect } from "react";
import { getAllNews } from "../api/api_base";
import axios from "axios";

const Videos_GalleryApi = () => {
  const [news, setNews] = useState([]);

  const getAllNewsApi = async () => {
    try {
      const response = await axios.get(getAllNews);
      setNews(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
 
  useEffect(() => {
    getAllNewsApi();
  }, []);

  return (
    <>  
      <style>{`
        .news-div {
          height:80vh;
        }
      `}</style>
      
      {news.map((newsItem, index) => (
        
          <marquee key={index} className="col-12 news-div" behavior="scroll" direction="up">
            <div className="mb-2 border-bottom">
              <div>
                <h4 className="text-warning">{newsItem.title}</h4>
                <p className="text-white">{newsItem.content}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-light">{newsItem.startdate}</p>
                <p className="text-light">{newsItem.enddate}</p> 
              </div>  
            </div>
          </marquee>
      ))}
    </>
  )
}

export default Videos_GalleryApi;
