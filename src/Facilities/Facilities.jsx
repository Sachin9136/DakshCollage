import React, { useEffect } from "react";
import { getsinglefacilityapi } from "../Redux-toolkit/Slice/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Facilities = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleFacility, status, error } = useSelector((state) => state.navbar);
  useEffect(() => {
    dispatch(getsinglefacilityapi(id));
  }, [id]);

  console.log(singleFacility);

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
                <div className="text-white h1 " dangerouslySetInnerHTML={{ __html: singleFacility.data ? singleFacility.data.title :"not found" }}></div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 p-0 m-0">
                <section>
                  <div className="block no-bottom">
                    <div className="container">
                      <div className="success-story">
                        <div className="row align-items-center ">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <figure className="d-flex justify-content-center">
                              {singleFacility.data && singleFacility.data.Image ? (
                                <img src={singleFacility.data.Image} alt="" width="70%" />
                              ) : (
                                <p>No image found</p>
                              )}
                            </figure>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="success-meta genrl-block">
                            <h1 dangerouslySetInnerHTML={{ __html: singleFacility.data ? singleFacility.data.title :"not found" }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: singleFacility.data ? singleFacility.data.description :"not found" }}></p>
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

export default Facilities;

