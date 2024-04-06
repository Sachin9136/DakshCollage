import React, { useEffect } from "react";
import { getAcademicSingleApi } from "../Redux-toolkit/Slice/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../About/About.css";

const About = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleacademics, status, error } = useSelector((state) => state.navbar);
  useEffect(() => {
    dispatch(getAcademicSingleApi(id));
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
                <div className="text-white h1 " dangerouslySetInnerHTML={{ __html: singleacademics.data ? singleacademics.data.title :"not found" }}></div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 p-0 m-0 py-5">
                <section>
                  <div className="block no-bottom">
                    <div className="container">
                      <div className="success-story">
                        <div className="row align-items-center ">
                          <li className="col-sm-12 col-lg-4 trending certified border rounded-3">
                            <div className="pop-course">
                              <div className="course-thumb">
                              <figure className="d-flex justify-content-center">
                                {singleacademics.data && singleacademics.data.Image ? (
                                  <img src={singleacademics.data.Image} alt="" width="100%" />
                                ) : (
                                  <p>No image found</p>
                                )}
                              </figure>
                                <span>$24.99</span>
                                <a href="course-detail.html" className="butn">
                                  Start Now
                                </a>
                              </div>
                              <div className="course-meta">
                                <div className="course-author">
                                  <img src="assets/images/author.png" alt="" />
                                  <span>Sarah Johnson</span>
                                </div>
                                <h2 dangerouslySetInnerHTML={{ __html: singleacademics.data ? singleacademics.data.title :"not found" }}></h2>
                                <p dangerouslySetInnerHTML={{ __html: singleacademics.data ? singleacademics.data.description :"not found" }}></p>
                                {/* <a href="#">
                                  <i className="fa fa-download" />
                                  <span>95</span>
                                </a>
                                <a href="#">
                                  <i className="fa fa-comments" />
                                  <span>2</span>
                                </a> */}
                              </div>
                            </div>
                          </li>
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
