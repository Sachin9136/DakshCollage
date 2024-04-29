import React, { useState, useEffect } from "react";
import { getAllNews } from "../api/api_base";
import axios from "axios";

const NewsApi = () => {
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
        .news-div{
          height:80vh;
        }
      `}</style>
      <marquee  className="col-12 news-div" behavior="scroll" direction="up">
      {news.map((newsItem, index) => (
        <div key={index}>
            <div className="mb-2 border-bottom">
              <div>
                <h4 className="text-warning" dangerouslySetInnerHTML={{ __html: newsItem.title }}></h4>
                <p className="text-white" dangerouslySetInnerHTML={{ __html: newsItem.content }}></p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-light">{newsItem.startdate}</p>
                <p className="text-light">{newsItem.enddate}</p> 
              </div>  
            </div>
          </div>
      ))}
      </marquee>
    </>
    
  )
}

export default NewsApi;
