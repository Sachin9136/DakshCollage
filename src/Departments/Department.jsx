import React, { useEffect } from "react";
import { getSingleDepartmentApi } from "../Redux-toolkit/Slice/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const About = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { SingleDepartments, status, error } = useSelector((state) => state.navbar);
  
  useEffect(() => {
    dispatch(getSingleDepartmentApi(id));
  }, [id]);

  // Function to capitalize all words with the first letter capitalized
  const capitalizeAllWords = (string) => {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row page-header m-0 p-0">
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
            <div className="row m-0 p-0 pb-5">
              <div className="col-sm-12 d-flex align-items-center justify-content-center banner-img w-100">
                <div className="text-white h1 " dangerouslySetInnerHTML={{ __html: SingleDepartments.data ? capitalizeAllWords(SingleDepartments.data.title) :"not found" }}></div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 p-0 m-0">
                <section>
                  <div className="block no-bottom">
                    <div className="container">
                      <div className="success-story">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 pb-5">
                            <figure className="d-flex justify-content-center">
                              {SingleDepartments.data && SingleDepartments.data.Image ? (
                                <img className="rounded" src={SingleDepartments.data.Image} alt="" width="70%" />
                              ) : (
                                <p>No image found</p>
                              )}
                            </figure>
                          </div>
                          <div className="col-sm-12 col-md-10 col-lg-10">
                            <div className="">
                              <h1 dangerouslySetInnerHTML={{ __html: SingleDepartments.data ? capitalizeAllWords(SingleDepartments.data.title) :"not found" }}></h1>
                              <p dangerouslySetInnerHTML={{ __html: SingleDepartments.data ? SingleDepartments.data.description :"not found" }}></p>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
