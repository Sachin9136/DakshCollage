import React, { useState, useEffect } from "react";
import { getSingleAddmission } from "../Componanats/api/api_base";
import { useParams } from "react-router-dom";
import axios from "axios";

const Admission_Form = () => {

  const { id } = useParams();
  const [singleAddmission, setsingleAddmission] = useState([]);

  const getSingleAddmissionApi = async () => {
    try {
      const response = await axios.get(`${getSingleAddmission}/${id}`);
      setsingleAddmission(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getSingleAddmissionApi();
  }, [id]);

  console.log(singleAddmission)

  return (
    <div>
    <div className="container">
      <div className="row page-header">
        <div className="col-sm-12">
        <div dangerouslySetInnerHTML={{ __html: singleAddmission.email }}></div> 
        </div>
      </div>
    </div>
  </div>
  )
}

export default Admission_Form
