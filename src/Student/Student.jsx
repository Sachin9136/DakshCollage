import React, { useEffect } from "react";
import { getSingleStudentPdfApi } from "../Redux-toolkit/Slice/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button"; // Import Button component from Bootstrap

const Student = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); 
  const { SingleStudentPdf, status, error } = useSelector((state) => state.navbar);
  useEffect(() => {
    dispatch(getSingleStudentPdfApi(id));
  }, [id]);

  console.log(SingleStudentPdf);

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row page-header p-0 m-0">
          {status === "loading" && (
            <div className="col-sm-12 text-center">
              <p>loading</p>{" "}
            </div>
          )}
          {status === "failed" && (
            <div className="col-sm-12 text-center">
              <p>{error}</p>{" "}
            </div>
          )}
          {status === "succeeded" && (
            <>
            <div className="row m-0 p-0">
              <div className="col-sm-12 d-flex align-items-center justify-content-center banner-img w-100">
                <div className="text-white h1 " dangerouslySetInnerHTML={{ __html: SingleStudentPdf.data ? capitalizeFirstLetter(SingleStudentPdf.data.title) :"not found" }}></div>
              </div>
              <div className="col-12 p-0 m-0 p-5 d-flex justify-content-center">
                <div>
                    <Button variant="outline-success btn-sm mx-1 login-btn">{SingleStudentPdf.data ? capitalizeFirstLetter(SingleStudentPdf.data.title) :"not found"}</Button>
                 <div>
                 
                 </div>
                </div>
              </div>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;
