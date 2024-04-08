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
                        <div className="row">
                          <div className="col-sm-12 col-md-5 col-lg-4">
                            <figure className="d-flex justify-content-center">
                              {aboutussingle.data && aboutussingle.data.AboutImage ? (
                                <img src={aboutussingle.data.AboutImage} alt="" className="rounded" />
                              ) : (
                                <p>No image found</p>
                              )}
                            </figure>
                          </div>
                          <div className="col-sm-12 col-md-5 col-lg-8">
                            <h1 dangerouslySetInnerHTML={{ __html: aboutussingle.data ? aboutussingle.data.title :"not found" }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: aboutussingle.data ? aboutussingle.data.description :"not found" }}></p>
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
