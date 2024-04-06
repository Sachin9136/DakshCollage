import React, { useEffect } from "react";
import { getaboutussingleapi } from "../Redux-toolkit/Slice/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./About.css";

const About = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { aboutussingle, status, error } = useSelector((state) => state.navbar);
  useEffect(() => {
    dispatch(getaboutussingleapi(id));
  }, [id]);
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
                <div className="text-white h1 " dangerouslySetInnerHTML={{ __html: aboutussingle.data ? aboutussingle.data.title :"not found" }}></div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 p-0 m-0">
                <section>
                  <div className="block no-bottom">
                    <div className="container">
                      <div className="success-story">
                        <div className="row align-items-center ">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <figure className="d-flex justify-content-center">
                              {aboutussingle.data && aboutussingle.data.AboutImage ? (
                                <img src={aboutussingle.data.AboutImage} alt="" />
                              ) : (
                                <p>No image found</p>
                              )}
                            </figure>
                          </div>
                          <div className="col-sm-12 col-md-8 col-lg-8">
                            <h1 dangerouslySetInnerHTML={{ __html: aboutussingle.data ? aboutussingle.data.title :"not found" }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: aboutussingle.data ? aboutussingle.data.description :"not found" }}></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* success story */}
                <section>
                  <div className="block no-top">
                    <div className="container">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-lg-10">
                          <div className="row">
                            <div className="col-6 col-sm-3">
                              <div className="funfact">
                                <strong className="counter">300</strong>
                                <span>Online Courses</span>
                              </div>
                            </div>
                            <div className="col-6 col-sm-3">
                              <div className="funfact">
                                <strong>
                                  <span className="counter">90</span>+
                                </strong>
                                <span> National Awards</span>
                              </div>
                            </div>
                            <div className="col-6 col-sm-3">
                              <div className="funfact">
                                <strong>
                                  <span className="counter">48</span>k
                                </strong>
                                <span>Online Courses</span>
                              </div>
                            </div>
                            <div className="col-6 col-sm-3">
                              <div className="funfact">
                                <strong>
                                  <span className="counter">1078</span>+
                                </strong>
                                <span> Students Enrolled</span>
                              </div>
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
