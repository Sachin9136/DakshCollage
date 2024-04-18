import React, { useEffect } from "react";
import { getsingleMedicalfacilityapi } from "../Redux-toolkit/Slice/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MedicalFacility = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { SingleMedicalFacility, status, error } = useSelector((state) => state.navbar);
  useEffect(() => {
    dispatch(getsingleMedicalfacilityapi(id));
  }, [id]);
  return (
    <div>
      <div className="container-fluid">
        <div className="row page-header p-0 m-0 mb-5">
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
                <div className="text-white h1 " dangerouslySetInnerHTML={{ __html: SingleMedicalFacility.data ? SingleMedicalFacility.data.title :"not found" }}></div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 p-0 m-0">
                <section>
                  <div className="block no-bottom">
                    <div className="container">
                      <div className="success-story">
                        <div className="row align-items-center ">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="">
                            <h1 dangerouslySetInnerHTML={{ __html: SingleMedicalFacility.data ? SingleMedicalFacility.data.title :"not found" }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: SingleMedicalFacility.data ? SingleMedicalFacility.data.description :"not found" }}></p>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <figure className="d-flex justify-content-center">
                              {SingleMedicalFacility.data && SingleMedicalFacility.data.Image ? (
                                <img src={SingleMedicalFacility.data.Image} alt="" width="100%" />
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

export default MedicalFacility;

