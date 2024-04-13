import React, { useState, useEffect } from "react";
import { getAllFeedback } from "../api/api_base";
import axios from "axios";

const Videos_GalleryApi = () => {
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

  console.log(feedback.data);

  return (
    <>  
        {feedback.map((feedback, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-4">
                <div className="gallery-meta">
                <h2>{feedback.name}</h2>
                </div>
            </div>
        ))};
    </>
  )
}

export default Videos_GalleryApi
