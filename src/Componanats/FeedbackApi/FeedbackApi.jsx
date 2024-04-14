import React, { useState, useEffect } from "react";
import { getAllFeedback } from "../api/api_base";
import axios from "axios";

const FeedbackApi = () => {
  const [feedback, setFeedback] = useState([]);

  const getAllFeedbackApi = async () => {
    try {
      const response = await axios.get(getAllFeedback);
      setFeedback(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
 
  useEffect(() => {
    getAllFeedbackApi();
  }, []);

  return (
    <>  
      <style>{`
        .news-div {
          height:80vh;
        }
      `}</style>
      
      {feedback.map((feedbackItem, index) => (
        
          <marquee key={index} className="col-12 news-div" behavior="scroll" direction="up">
            <div className="mb-2 border-bottom">
              <div>
                <h4 className="text-warning">{feedbackItem.name}</h4>
                <p className="text-white">{feedbackItem.email}</p>
              </div> 
            </div>
          </marquee>
      ))}
    </>
  )
}

export default FeedbackApi;
