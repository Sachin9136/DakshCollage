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
              <div className="row m-0 p-0">
              <div className="col-sm-12 d-flex align-items-center justify-content-center banner-img w-100">
                <div className="text-white h1 " dangerouslySetInnerHTML={{ __html: SingleDepartments.data ? SingleDepartments.data.title :"not found" }}></div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 p-0 m-0">
                <section>
                  <div className="block no-bottom">
                    <div className="container">
                      <div className="success-story">
                        <div className="row align-items-center ">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="">
                            <h1 dangerouslySetInnerHTML={{ __html: SingleDepartments.data ? SingleDepartments.data.title :"not found" }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: SingleDepartments.data ? SingleDepartments.data.description :"not found" }}></p>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <figure className="d-flex justify-content-center">
                              {SingleDepartments.data && SingleDepartments.data.Image ? (
                                <img src={SingleDepartments.data.Image} alt="" width="70%" />
                              ) : (
                                <p>No image found</p>
                              )}
                            </figure>
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
